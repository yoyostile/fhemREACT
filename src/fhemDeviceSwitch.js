import React from "react"
import _ from "lodash"

import FhemSwitchDevice from './fhemSwitchDevice'
import FhemMAXDevice from './fhemMAXDevice'
import FhemRevoltDevice from './fhemRevoltDevice'
import FhemGenericDevice from './fhemGenericDevice'

class FhemDeviceSwitch extends React.Component {
  render() {
    const deviceType = this.props.device.Internals.TYPE
    if(deviceType == "IT")
      return <FhemSwitchDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "dummy" && this.props.device.Attributes.genericDeviceType == "switch")
      return <FhemSwitchDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "dummy")
      return <FhemGenericDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "MAX")
        return <FhemMAXDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "MYSENSORS_DEVICE")
        return <FhemGenericDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "Revolt")
        return <FhemRevoltDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />

    return <li>{ this.props.device.Attributes.alias || this.props.device.Name }</li>
  }
}

export default FhemDeviceSwitch
