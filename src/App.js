import React from 'react'
import Fhem from './fhem'
import FhemURLInput from './fhemURLInput'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmitURLInput = this.onSubmitURLInput.bind(this)
    this.resetFhemURL = this.resetFhemURL.bind(this)
    this.state = {
      fhemjsURL: localStorage.getItem('fhemjsURL') || '',
      fhemURL: localStorage.getItem('fhemURL') || ''
    }
  }

  onSubmitURLInput(e) {
    e.preventDefault()
    const fhemjsURL = e.target.getElementsByTagName("input")[0].value || ''
    const fhemURL = e.target.getElementsByTagName("input")[1].value || ''
    this.setState((prevState, _) => {
      if(fhemjsURL.match(/wss?:\/\/S*/) && fhemURL.match(/https?:\/\/S*/)) {
        localStorage.setItem('fhemjsURL', fhemjsURL)
        localStorage.setItem('fhemURL', fhemURL)
        return { fhemURL: fhemURL, fhemjsURL: fhemjsURL }
      }
    })
  }

  resetFhemURL() {
    localStorage.setItem('fhemURL', '')
    localStorage.setItem('fhemjsURL', '')
    this.setState({
      fhemURL: '',
      fhemjsURL: ''
    })
  }

  render() {
    console.log(this.state)
    const resetLinkStyle = { display: this.state.fhemURL && this.state.fhemjsURL ? 'inline' : 'none' }
    return <div className="App">
      <div className="small-12 columns">
        <h1>reactFHEM <small className="cursor" style={resetLinkStyle} onClick={this.resetFhemURL}>Reset Host</small></h1>
      </div>
      <div className="small-12 columns">
        { this.state.fhemURL && this.state.fhemjsURL ?
          <Fhem fhemjsURL={this.state.fhemjsURL} fhemURL={this.state.fhemURL} />
          :
          <FhemURLInput onSubmit={this.onSubmitURLInput} /> }
      </div>
    </div>
  }
}

export default App
