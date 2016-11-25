import React from "react"
import _ from "lodash"

class FhemURLInput extends React.Component {
  render() {
    return <div className='b-fhem-url-input pt-card pt-elevation-2'>
      <form onSubmit={this.props.onSubmit} >
        <h3>Please provide your fhem.js URL!</h3>
        <div className="row">
          <div className="small-12 columns">
            <input className="pt-input pt-large" type="text" placeholder="ws://your-fhem-host:8086/" />
            <input className="pt-input pt-large" type="text" placeholder="http://your-fhem-host:8083/" />
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <button type="submit" className="pt-button pt-intent-success float-right">
              Save
              <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  }
}

export default FhemURLInput
