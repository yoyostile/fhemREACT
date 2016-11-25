import React from "react"

import FhemSwitchDevice from './fhemSwitchDevice'
import FhemMAXDevice from './fhemMAXDevice'
import FhemGenericDevice from './fhemGenericDevice'
import FhemROLLODevice from './fhemROLLODevice'
import FhemWifiLightDevice from './fhemWifiLightDevice'
import FhemSVGDevice from './fhemSVGDevice'

class FhemDevice extends React.Component {
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
      return <FhemGenericDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "ROLLO")
      return <FhemROLLODevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "WifiLight")
      return <FhemWifiLightDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} />
    if(deviceType == "SVG")
      return <FhemSVGDevice device={this.props.device} handleDeviceCommand={this.props.handleDeviceCommand} fhemURL={this.props.fhemURL} />
    return <li>{ this.props.device.Attributes.alias || this.props.device.Name }</li>
  }
}

export default FhemDevice
