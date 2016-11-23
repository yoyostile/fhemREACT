import React from "react"
import _ from "lodash"

import FhemSwitchDevice from './fhemSwitchDevice'
import FhemMAXDevice from './fhemMAXDevice'
import FhemRevoltDevice from './fhemRevoltDevice'

class FhemGenericDevice extends React.Component {
  render() {
    switch(this.props.device.Internals.TYPE) {
      case "IT":
        return <FhemSwitchDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      case "dummy":
        return <FhemSwitchDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      case "MAX":
        return <FhemMAXDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      case "Revolt":
        return <FhemRevoltDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      default:
        return <li>{ this.props.device.Attributes.alias || this.props.device.Name }</li>
    }
  }
}

export default FhemGenericDevice
