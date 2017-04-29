import './fhem.sass'

import React from 'react'
import io from 'socket.io-client'
// import io from './fakeSocketIO'

import FhemNavigation from './fhemNavigation'
import FhemDevice from './fhemDevice'

class Fhem extends React.Component {

  constructor(props) {
    super(props)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleDeviceCommand = this.handleDeviceCommand.bind(this)
    this.handleDeviceChange = this.handleDeviceChange.bind(this)
    this.socket = io(this.props.fhemjsURL, { timeout: 5000, 'sync disconnect on unload' : true });
    this.state = {
      jsonlist: { Results: [] },
      rooms: [],
      activeRoom: localStorage.getItem('activeRoom') || "",
      fhemjsURL: this.props.fhemjsURL,
      fhemURL: this.props.fhemURL
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
    const rooms = _.chain(data.Results)
        .map((el) => {
          return el.Attributes ? el.Attributes.room : ''
        })
        .map((el) => {
          return el ? _.split(el, ",") : ''
        })
        .flatten()
        .uniq()
        .compact()
        .value()
    rooms.push("All")
    return rooms
  }

  getDevicesForActiveRoom() {
    return this.state.jsonlist.Results.filter((result) => {
      if(this.state.activeRoom == "All") return true
      return result.Attributes && result.Attributes.room && this.state.activeRoom ?
        (result.Attributes.room.match(this.state.activeRoom) && this.isAllowedType(result.Internals.TYPE))
        : false
    }).sort((a,b) => {
      let str1 = a.Internals.TYPE
      let str2 = b.Internals.TYPE
      return str1 < str2 ? -1 : str1 > str2
    })
  }

  isAllowedType(type) {
    return ["Revolt", "IT", "MAX", "dummy", "MYSENSORS_DEVICE", "ROLLO", "WifiLight", "SVG"]
      .includes(type)
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

  handleRoomChange(room) {
    localStorage.setItem('activeRoom', room)
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
    const devices = this.getDevicesForActiveRoom()
    return <div className="b-fhem">
      <FhemNavigation
        activeRoom={this.state.activeRoom}
        rooms={this.state.rooms}
        handleRoomChange={this.handleRoomChange}
        resetFhemURL={this.props.resetFhemURL}
        activeRoom={this.state.activeRoom}
      />
      <div className="row b-content-row">
        <div className="small-12 medium-10 medium-centered columns">
          <div className={`b-fhem-devices ${(devices.length == 0 ? ' hidden' : '')}`}>
            { devices.map((device, idx) => {
              return <FhemDevice
                  key={device.Name}
                  handleDeviceCommand={this.handleDeviceCommand}
                  device={device}
                  fhemURL={this.state.fhemURL}
                />
            })}
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Fhem
