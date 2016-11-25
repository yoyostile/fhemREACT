import React from "react"
import _ from "lodash"

import { Slider } from "@blueprintjs/core"
import { SketchPicker } from 'react-color'

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

  onButtonClick(event) {
    const val = event.target.getAttribute('value');
    this.props.handleDeviceCommand(`set ${this.props.device.Name} ${val}`)
  }

  onDimRelease(brightness) {
    console.log(brightness)
    this.props.handleDeviceCommand(`set ${this.props.device.Name} dim ${brightness}`)
  }

  onDimChange(brightness) {
    console.log(brightness)
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
        <div className="small-12 medium-6 columns">
          <h4>{this.props.device.Attributes.alias || this.props.device.Name}</h4>
        </div>
        <div className="small-12 medium-6 columns">
          <div className="pt-button-group float-right">
            { buttonVal.map((val) => {
              return <a
                  key={val}
                  onClick={this.onButtonClick}
                  value={val}
                  className="pt-button"
                  tabIndex="0"
                  role="button">{val}</a>
            }) }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 medium-6 columns">
          <table className="pt-table pt-bordered">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
            { keys.map((key, idx) => {
              return <tr key={key}>
                <td>{key}</td>
                <td>{this.props.device.Readings[key].Value}</td>
                <td>{this.props.device.Readings[key].Time}</td>
              </tr>
            })}
            </tbody>
          </table>
        </div>
        <div className="small-12 medium-6 columns">
          <div className="float-right">
            <SketchPicker
              color={this.props.device.Readings.RGB.Value}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <h4>Dimmer</h4>
          <Slider
            min={0}
            max={100}
            labelStepSize={10}
            stepSize={1}
            value={this.state.brightness}
            onChange={this.onDimChange}
            onRelease={this.onDimRelease}
            renderLabel={this.renderLabel}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemWifiLightDevice
