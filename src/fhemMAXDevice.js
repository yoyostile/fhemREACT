import React from "react"
import _ from "lodash"
import { Slider } from "@blueprintjs/core"

class FhemMAXDevice extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: parseFloat(this.props.device.Internals.STATE)
    }
  }

  handleChange(event) {
    this.setState({
      value: event
    }, () => {
      this.props.handleDeviceCommand(`set ${this.props.device.Name} desiredTemperature ${this.state.value}`)
    })
  }

  valuesForDevice(device) {
    return device.PossibleSets.match(/desiredTemperature:(\S*)/)[1].split(",")
  }

  numericValuesForDevice(device) {
    return this.valuesForDevice(device).map(parseFloat).filter((el) => {
      return !isNaN(el)
    })
  }

  buttonValuesForDevice(device) {
    return this.valuesForDevice(device).filter(isNaN)
  }

  renderTemperatureLabel(num) {
    return `${num}℃`
  }

  render() {
    let numVal = this.numericValuesForDevice(this.props.device)
    let value = parseFloat(this.props.device.Readings.state.Value)
    let actualValue = parseFloat(this.props.device.Readings.temperature.Value)
    return <div className="b-fhem-max-device">
      <p className="pt-ui-text-large">{this.props.device.Attributes.alias} - {actualValue}℃</p>
      { this.props.device.Readings.valveposition ? <p>Geöffnet: {parseFloat(this.props.device.Readings.valveposition.Value)}%</p> : null }
      <Slider
        disabled={false}
        min={numVal[0]}
        max={numVal[numVal.length - 1]}
        labelStepSize={2.5}
        stepSize={0.5}
        value={this.state.value}
        onChange={this.handleChange}
        renderLabel={this.renderTemperatureLabel}
      />
    </div>
  }
}

export default FhemMAXDevice
