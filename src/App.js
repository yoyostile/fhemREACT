import React from 'react'
import Fhem from './fhem'
import FhemURLInput from './fhemURLInput'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmitURLInput = this.onSubmitURLInput.bind(this)
    this.resetFhemURL = this.resetFhemURL.bind(this)
    this.state = {
      fhemURL: localStorage.getItem('fhemURL') || ''
    }
  }

  onSubmitURLInput(e) {
    e.preventDefault()
    const newURL = e.target.getElementsByTagName("input")[0].value
    this.setState((prevState, _) => {
      if(newURL.match(/ws:\/\/\S*/)) {
        localStorage.setItem('fhemURL', newURL)
        return { fhemURL: newURL }
      }
    })
  }

  resetFhemURL() {
    localStorage.setItem('fhemURL', '')
    this.setState({
      fhemURL: ''
    })
  }

  render() {
    const resetLinkStyle = { display: this.state.fhemURL ? 'inline' : 'none' }
    return <div className="App">
      <div className="small-12 columns">
        <h1>reactFHEM <small className="cursor" style={resetLinkStyle} onClick={this.resetFhemURL}>Reset Host</small></h1>
      </div>
      <div className="small-12 columns">
        { this.state.fhemURL ? <Fhem url={this.state.fhemURL} /> : <FhemURLInput onSubmit={this.onSubmitURLInput} /> }
      </div>
    </div>
  }
}

export default App
