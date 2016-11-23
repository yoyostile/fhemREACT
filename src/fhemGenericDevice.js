import React from "react"
import _ from "lodash"

import FhemITDevice from './fhemITDevice'
import FhemMAXDevice from './fhemMAXDevice'

class FhemGenericDevice extends React.Component {
  render() {
    switch(this.props.device.Internals.TYPE) {
      case "IT":
        return <FhemITDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      case "MAX":
        return <FhemMAXDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
      default:
        return <li>{ this.props.device.Attributes.alias }</li>
    }
  }
}

export default FhemGenericDevice
