import React from 'react'
import Fhem from './fhem'
import FhemURLInput from './fhemURLInput'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onConfirmURLInput = this.onConfirmURLInput.bind(this)
    this.resetFhemURL = this.resetFhemURL.bind(this)
    this.state = {
      fhemURL: localStorage.getItem('fhemURL') || ''
    }
  }

  onConfirmURLInput(newURL) {
    console.log(newURL)
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
    return <div className="App">
      <div className="small-12 columns">
        <h1>reactFHEM <small className="cursor" onClick={this.resetFhemURL}>Reset Host</small></h1>
      </div>
      <div className="small-12 columns">
        { this.state.fhemURL ? <Fhem /> : <FhemURLInput onConfirm={this.onConfirmURLInput} /> }
      </div>
    </div>
  }
}

export default App
