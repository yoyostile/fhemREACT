import React from "react"
import _ from "lodash"
import { Slider } from "@blueprintjs/core"

class FhemROLLODevice extends React.Component {

  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onRelease = this.onRelease.bind(this)
    this.state = {
      value: parseFloat(this.props.device.Readings.position.Value),
      requestSent: false
    }
  }

  componentWillReceiveProps(nextProps) {
    let newValue = this.extractValue(nextProps.device.Readings.position.Value)
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
    this.props.handleDeviceCommand(`set ${this.props.device.Name} position ${this.state.value}`)
    this.setState({
      requestSent: true
    })
  }

  onButtonClick(event) {
    const val = event.target.getAttribute('value');
    this.props.handleDeviceCommand(`set ${this.props.device.Name} ${val}`)
  }

  numericValuesForDevice(device) {
    const positionValues = device.PossibleSets.match(/position:(\S*)/)[1].split(",")
    return positionValues.map(parseFloat).filter((el) => {
      return !isNaN(el)
    })
  }

  buttonValuesForDevice(device) {
    const values = device.PossibleSets.match(/(\S*):noArg/g)
    return values.map((val) => { return val.split(':')[0] })
  }

  renderLabel(val) {
    return `${val}%`
  }

  render() {
    const keys = Object.keys(this.props.device.Readings)
    const numVal = this.numericValuesForDevice(this.props.device)
    const buttonVal = this.buttonValuesForDevice(this.props.device)
    return <div className="b-fhem-rollo-device">
      <div className="row">
        <div className="small-12 medium-6 columns">
          <h4>{this.props.device.Attributes.alias} - {this.props.device.Name}</h4>
          { this.props.device.Readings.position ? <p>Geöffnet: {parseFloat(this.props.device.Readings.position.Value)}%</p> : null }
        </div>
        <div className="small-12 medium-6 columns">
          <div className="pt-button-group float-right">
            { buttonVal.map((val) => {
              return <a
                  key={val}
                  onClick={this.onButtonClick}
                  value={val}
                  className={`pt-button ${this.props.device.Readings.state.Value == val ? ' pt-disabled' : ''}`}
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
            labelStepSize={10}
            stepSize={10}
            value={this.state.value}
            onChange={this.onChange}
            onRelease={this.onRelease}
            renderLabel={this.renderLabel}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemROLLODevice
