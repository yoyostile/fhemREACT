import React from "react"

class FhemSVGDevice extends React.Component {
  constructor(props) {
    super(props)
    this.generateSVGURL = this.generateSVGURL.bind(this)
    this.state = {
      plotSVG: ''
    }
  }

  stripTrailingSlash(str) {
    return str.match(/(\S*)[^\/]/g)
  }

  generateSVGURL() {
    return `${this.stripTrailingSlash(this.props.fhemURL)}/fhem/SVG_showLog?dev=${this.props.device.Internals.NAME}&logdev=${this.props.device.Internals.LOGDEVICE}&gplotfile=${this.props.device.Internals.GPLOTFILE}&logfile=CURRENT&pos=zoom=week;off=0`
  }

  render() {
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-svg-device">
      <h5>{this.props.device.Attributes.alias || this.props.device.Name}</h5>
      <img src={this.generateSVGURL()} />
    </div>
  }
}

export default FhemSVGDevice
