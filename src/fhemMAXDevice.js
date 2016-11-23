import React from "react"
import _ from "lodash"
import { Slider } from "@blueprintjs/core"

class FhemMAXDevice extends React.Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onRelease = this.onRelease.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      value: this.extractValue(this.props.device.Readings.state.Value),
      requestSent: false
    }
  }

  extractValue(str) {
    const numeric = parseFloat(str)
    const numericValues = this.numericValuesForDevice(this.props.device)
    if(isNaN(numeric))
      return str.match(/on/) ?  numericValues[numericValues.length - 1] : numericValues[0]
    else
      return numeric
  }

  componentWillReceiveProps(nextProps) {
    let newValue = this.extractValue(nextProps.device.Readings.state.Value)
    if(this.state.requestSent) {
      this.setState((prevState, props) => {
        if(props.value == newValue)
          return { requestSent: false }
      })
    } else {
      this.setState({
        value: newValue
      })
    }
  }

  onChange(event) {
    this.setState({
      value: event
    })
  }

  onRelease(event) {
    this.props.handleDeviceCommand(`set ${this.props.device.Name} desiredTemperature ${this.state.value}`)
    this.setState({
      requestSent: true
    })
  }

  onButtonClick(event) {
    const val = event.target.getAttribute('value');
    this.props.handleDeviceCommand(`set ${this.props.device.Name} desiredTemperature ${val}`)
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
    let buttonVal = this.buttonValuesForDevice(this.props.device)
    let numVal = this.numericValuesForDevice(this.props.device)
    let value = this.extractValue(this.props.device.Readings.state.Value)
    let actualValue = parseFloat(this.props.device.Readings.temperature.Value)
    return <div className="b-fhem-max-device">
      <div className="row">
        <div className="small-12 medium-6 columns">
          <p className="pt-ui-text-large">{this.props.device.Attributes.alias} - {this.props.device.Name} - {actualValue}℃</p>
          { this.props.device.Readings.valveposition ? <p>Geöffnet: {parseFloat(this.props.device.Readings.valveposition.Value)}%</p> : null }
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
                  role="button"
                  disabled={this.state.value == val}>{val}</a>
            }) }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <Slider
            disabled={false}
            min={numVal[0]}
            max={numVal[numVal.length - 1]}
            labelStepSize={2.5}
            stepSize={0.5}
            value={this.state.value}
            onChange={this.onChange}
            onRelease={this.onRelease}
            renderLabel={this.renderTemperatureLabel}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemMAXDevice
