import React from "react"
import _ from "lodash"
import { Toggle } from 'material-ui'

class FhemSwitchDevice extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let newState = this.props.device.Internals.STATE == "on" ? "off" : "on"
    this.props.handleDeviceCommand(`set ${this.props.device.Name} ${newState}`)
  }

  render() {
    return <div className="b-fhem-switch-device">
      <Toggle
        defaultToggled={this.props.device.Internals.STATE == "on"}
        label={`${this.props.device.Attributes.alias} - ${this.props.device.Name}`}
        onToggle={this.handleChange} />
    </div>
  }
}

export default FhemSwitchDevice
