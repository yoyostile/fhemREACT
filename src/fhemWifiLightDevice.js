import React from "react"

import { ChromePicker } from 'react-color'
import { FlatButton, Slider } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class FhemWifiLightDevice extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onDimRelease = this.onDimRelease.bind(this)
    this.onDimChange = this.onDimChange.bind(this)

    this.state = {
      brightness: parseFloat(this.props.device.Readings.brightness.Value)
    }
  }

  componentWillReceiveProps(nextProps) {
    let newBrightness = parseFloat(nextProps.device.Readings.brightness.Value)
    this.setState({
      brightness: newBrightness
    })
  }

  handleChangeComplete(color, event) {
    const hex = color.hex.match(/#(\S*)/)[1]
    this.props.handleDeviceCommand(`set ${this.props.device.Name} RGB ${hex}`)
  }

  onButtonClick(val) {
    this.props.handleDeviceCommand(`set ${this.props.device.Name} ${val}`)
  }

  onDimRelease(event) {
    this.props.handleDeviceCommand(`set ${this.props.device.Name} dim ${this.state.brightness}`)
  }

  onDimChange(event, brightness) {
    this.setState({
      brightness: brightness
    })
  }

  buttonValuesForDevice(device) {
    return ["on", "off"]
  }

  renderLabel(str) {
    return `${str}%`
  }

  render() {
    console.log(this.props.device)
    const buttonVal = this.buttonValuesForDevice(this.props.device)
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-generic-device">
      <div className="row">
        <div className="small-12columns">
          <h3>{this.props.device.Attributes.alias || this.props.device.Name}</h3>
          { buttonVal.map((val) => {
            return <FlatButton
                key={val}
                onTouchTap={this.onButtonClick.bind(this, val)}
                disabled={this.props.device.Readings.state.Value == val}
                value={val}
                label={val}
              />
          }) }
        </div>
      </div>
      <div className="row">
        <div className="small-12 medium-6 columns">
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Attribute</TableHeaderColumn>
                <TableHeaderColumn>Value</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            { keys.map((key, idx) => {
              return <TableRow key={key}>
                <TableRowColumn>{key}</TableRowColumn>
                <TableRowColumn>{this.props.device.Readings[key].Value}</TableRowColumn>
              </TableRow>
            })}
            </TableBody>
          </Table>
        </div>
        <div className="small-12 medium-6 columns">
          <ChromePicker
            width="320px"
            color={this.props.device.Readings.RGB.Value}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns with-top-margin">
          <h5>Dimmer - {this.state.brightness}%</h5>
          <Slider
            min={0}
            max={100}
            step={1}
            value={this.state.brightness}
            onChange={this.onDimChange}
            onDragStop={this.onDimRelease}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemWifiLightDevice
