import React from 'react'
import Fhem from './fhem'
import FhemURLInput from './fhemURLInput'
import {
  blueGrey500, blueGrey700,
  deepOrange300,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    primary3Color: grey400,
    accent1Color: deepOrange300,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueGrey500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
})

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
      return <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        { this.state.fhemURL && this.state.fhemjsURL ?
          <Fhem fhemjsURL={this.state.fhemjsURL} fhemURL={this.state.fhemURL} resetFhemURL={this.resetFhemURL} />
          :
          <FhemURLInput onSubmit={this.onSubmitURLInput} /> }
      </div>
    </MuiThemeProvider>
  }
}

export default App
