import React from "react"
import _ from "lodash"

class FhemSVGDevice extends React.Component {
  constructor(props) {
    super(props)
    this.generateSVGURL = this.generateSVGURL.bind(this)
    this.state = {
      plotSVG: ''
    }
  }

  componentDidMount() {
    // fetch(this.generateSVGURL(), { cors: 'no-corse' }).then((response) => {
    //   console.log(response)
    //   // setState({
    //   //   plotSVG: response
    //   // })
    // })
  }

  stripTrailingSlash(str) {
    return str.match(/(\S*)[^\/]/g)
  }

  generateSVGURL() {
    // http://fhem.lan.r4r3.me:8083/fhem/
    // SVG_showLog?dev=SVG_FileLog_MAX_0b196b_1&logdev=FileLog_MAX_0b196b&gplotfile=SVG_FileLog_MAX_0b196b_1&logfile=CURRENT&pos=zoom=week;off=0
    return `${this.stripTrailingSlash(this.props.fhemURL)}/fhem/SVG_showLog?dev=${this.props.device.Internals.NAME}&logdev=${this.props.device.Internals.LOGDEVICE}&gplotfile=${this.props.device.Internals.GPLOTFILE}&logfile=CURRENT&pos=zoom=week;off=0`
  }

  render() {
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-generic-device">
      <h4>{this.props.device.Attributes.alias || this.props.device.Name}</h4>
      <img src={this.generateSVGURL()} />
    </div>
  }
}

export default FhemSVGDevice
