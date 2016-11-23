import React from "react"
import _ from "lodash"
import { EditableText } from "@blueprintjs/core"

class FhemURLInput extends React.Component {
  render() {
    return <div className='b-fhem-url-input pt-card pt-elevation-2'>
      <h3>Please provide your fhem.js URL!</h3>
      <h1>
        <EditableText placeholder="ws://your-fhem-host:8086/" onConfirm={this.props.onConfirm} />
      </h1>
    </div>
  }
}

export default FhemURLInput
