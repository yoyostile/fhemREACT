import './fhem.sass'

import React from 'react'
import io from 'socket.io-client'
import _ from 'lodash'

import FhemRoomSwitcher from './fhemRoomSwitcher'
import FhemGenericDevice from './fhemGenericDevice'

class Fhem extends React.Component {

  constructor(props) {
    super(props)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleDeviceCommand = this.handleDeviceCommand.bind(this)
    this.handleDeviceChange = this.handleDeviceChange.bind(this)
    this.socket = io(this.props.url, { timeout: 5000, 'sync disconnect on unload' : true });
    this.state = {
      jsonlist: { Results: [] },
      rooms: [],
      activeRoom: ""
    }
  }

  componentDidMount() {
    this.socket.connect()
    this.socket.emit("JsonList2", "", (data) => {
      let rooms = this.getRoomsFromData(data);
      this.setState({
        jsonlist: data,
        rooms: rooms
      })
    })

    this.socket.emit("getAllDevicesOnChange")
    this.socket.on('device', this.handleDeviceChange)
  }

  getRoomsFromData(data) {
    return _.chain(data.Results)
        .map((el) => { return el.Attributes.room })
        .map((el) => {
          return el ? _.split(el, ",") : ''
        })
        .flatten()
        .uniq()
        .compact()
        .value()
  }

  getDevicesForActiveRoom() {
    return this.state.jsonlist.Results.filter((result) => {
      return result.Attributes.room && this.state.activeRoom ?
        (result.Attributes.room.match(this.state.activeRoom) && this.isAllowedType(result.Internals.TYPE))
        : false
    })
  }

  isAllowedType(type) {
    return ["Revolt", "IT", "MAX"].includes(type)
  }

  handleDeviceChange(data) {
    console.log('deviceChange from FHEM')
    let obj = data.Results[0]
    let name = obj.Name
    let results = this.state.jsonlist.Results.slice(0)
    let resultsIdx = _.findIndex(results, (res) => {
      return res.Name == name
    })
    results[resultsIdx] = obj
    this.setState({
      jsonlist: {
        Results: results
      }
    })
  }

  handleRoomChange(event) {
    const room = event.target.textContent
    this.setState({
      activeRoom: room
    })
  }

  handleDeviceCommand(command) {
    this.socket.emit("command", command, (data) => {
      console.log('sending: ' + command)
      console.log(data)
    })
  }

  render() {
    return <div className="b-fhem">
      <div className="row">
        <div className="small-12 medium-3 columns">
          <FhemRoomSwitcher activeRoom={this.state.activeRoom} rooms={this.state.rooms} handleRoomChange={this.handleRoomChange} />
        </div>
        <div className="small-12 medium-9 columns">
          <ul className="b-fhem-devices">
            { this.getDevicesForActiveRoom().map((device, _) => {
              return <FhemGenericDevice key={device.Name} handleDeviceCommand={this.handleDeviceCommand} device={device} />
            })}
          </ul>
        </div>
      </div>
    </div>;
  }
}

export default Fhem
