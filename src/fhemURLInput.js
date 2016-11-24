import React from "react"
import _ from "lodash"

class FhemURLInput extends React.Component {
  render() {
    return <div className='b-fhem-url-input pt-card pt-elevation-2'>
      <form onSubmit={this.props.onSubmit} >
        <h3>Please provide your fhem.js URL!</h3>
        <input className="pt-input pt-large" type="text" placeholder="ws://your-fhem-host:8086/" />
      </form>
    </div>
  }
}

export default FhemURLInput
