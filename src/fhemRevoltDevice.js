import React from "react"
import _ from "lodash"

class FhemRevoltDevice extends React.Component {

  render() {
    console.log(this.props.device)
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-revolt-device">
      <h4>{this.props.device.Attributes.alias || this.props.device.Name}</h4>
      <table className="pt-table pt-bordered">
        <thead>
          <th>Attribute</th>
          <th>Value</th>
          <th>Time</th>
        </thead>
        <tbody>
        { keys.map((key, idx) => {
          return <tr>
            <td>{key}</td>
            <td>{this.props.device.Readings[key].Value}</td>
            <td>{this.props.device.Readings[key].Time}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  }
}

export default FhemRevoltDevice
