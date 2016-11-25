import React from "react"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class FhemGenericDevice extends React.Component {

  render() {
    const keys = Object.keys(this.props.device.Readings)
    return <div className="b-fhem-generic-device">
      <h5>{this.props.device.Attributes.alias || this.props.device.Name}</h5>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Attribute</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
            <TableHeaderColumn>Time</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        { keys.map((key, idx) => {
          return <TableRow key={key}>
            <TableRowColumn>{key}</TableRowColumn>
            <TableRowColumn>{this.props.device.Readings[key].Value}</TableRowColumn>
            <TableRowColumn>{this.props.device.Readings[key].Time}</TableRowColumn>
          </TableRow>
        })}
        </TableBody>
      </Table>
    </div>
  }
}

export default FhemGenericDevice
