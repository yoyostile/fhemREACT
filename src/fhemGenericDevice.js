import React from "react"
import _ from "lodash"

class FhemGenericDevice extends React.Component {

  render() {
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-generic-device">
      <h4>{this.props.device.Attributes.alias || this.props.device.Name}</h4>
      <table className="pt-table pt-bordered">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        { keys.map((key, idx) => {
          return <tr key={key}>
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

export default FhemGenericDevice
