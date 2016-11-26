import React from "react"
import { RaisedButton, Slider } from 'material-ui';

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

  onChange(event, value) {
    this.setState({
      value: value
    })
  }

  onRelease(event, value) {
    this.props.handleDeviceCommand(`set ${this.props.device.Name} desiredTemperature ${this.state.value}`)
    this.setState({
      requestSent: true
    })
  }

  onButtonClick(val) {
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

  render() {
    let buttonVal = this.buttonValuesForDevice(this.props.device)
    let numVal = this.numericValuesForDevice(this.props.device)
    let value = this.extractValue(this.props.device.Readings.state.Value)
    let actualValue = parseFloat(this.props.device.Readings.temperature.Value)
    return <div className="b-fhem-max-device">
      <div className="row">
        <div className="small-12 columns">
          <h3>{this.props.device.Attributes.alias} - {this.props.device.Name} - {actualValue}℃</h3>
          { buttonVal.map((val) => {
            return <RaisedButton
                key={val}
                onTouchTap={this.onButtonClick.bind(this, val)}
                value={val}
                label={val}
                className="a-button"
                primary={true}
                disabled={this.state.value == val} />
          }) }
          <p>Zieltemperatur: {this.state.value}℃</p>
          { this.props.device.Readings.valveposition ? <p>Geöffnet: {parseFloat(this.props.device.Readings.valveposition.Value)}%</p> : null }
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <Slider
            disabled={false}
            min={numVal[0]}
            max={numVal[numVal.length - 1]}
            step={0.5}
            value={this.state.value}
            onChange={this.onChange}
            onDragStop={this.onRelease}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemMAXDevice
