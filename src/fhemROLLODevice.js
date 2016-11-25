import React from "react"
import { FlatButton, Slider } from 'material-ui';

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
    let newValue = parseFloat(nextProps.device.Readings.position.Value)
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

  onRelease(event) {
    this.props.handleDeviceCommand(`set ${this.props.device.Name} position ${this.state.value}`)
    this.setState({
      requestSent: true
    })
  }

  onButtonClick(val) {
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

  render() {
    const keys = Object.keys(this.props.device.Readings)
    const numVal = this.numericValuesForDevice(this.props.device)
    const buttonVal = this.buttonValuesForDevice(this.props.device)
    return <div className="b-fhem-rollo-device">
      <div className="row">
        <div className="small-12 medium-6 columns">
          <h5>{this.props.device.Attributes.alias} - {this.props.device.Name}</h5>
          { this.props.device.Readings.position ? <p>Rollostand: {parseFloat(this.props.device.Readings.position.Value)}%</p> : null }
          <p>Zielstand: {this.state.value}%</p>
        </div>
        <div className="small-12 medium-6 columns">
          { buttonVal.map((val) => {
            let active = this.props.device.Readings.state.Value == val
            return <FlatButton
                key={val}
                onTouchTap={this.onButtonClick.bind(this, val)}
                value={val}
                label={val}
                disabled={active}
                primary={true}
              />
          }) }
        </div>
      </div>
      <div className="row">
        <div className="small-12 columns">
          <Slider
            disabled={false}
            min={numVal[0]}
            max={numVal[numVal.length - 1]}
            step={10}
            value={this.state.value}
            onChange={this.onChange}
            onDragStop={this.onRelease}
          />
        </div>
      </div>
    </div>
  }
}

export default FhemROLLODevice
