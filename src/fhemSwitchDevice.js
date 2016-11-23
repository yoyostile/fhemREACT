import React from "react"
import _ from "lodash"
import { Switch } from "@blueprintjs/core"

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
      <Switch
        checked={this.props.device.Internals.STATE == "on"}
        label={`${this.props.device.Attributes.alias} - ${this.props.device.Name}`}
        onChange={this.handleChange} />
    </div>
  }
}

export default FhemSwitchDevice
