import React from "react"
import { RaisedButton, TextField } from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class FhemURLInput extends React.Component {
  render() {
    return (
      <div className="row b-fhem-url-input">
        <div className="small-12 columns">
          <h1 className="text-center">reactFHEM</h1>
        </div>
        <div className="small-12 columns">
          <Card>
            <CardHeader title="Please provide your fhem.js as well as your Fhem Web URL!" />
            <CardText>
              <form onSubmit={this.props.onSubmit} >
                <div className="row">
                  <div className="small-12 columns">
                    <TextField fullWidth={true} hintText="ws://your-fhem-host:8086/" />
                    <TextField fullWidth={true} hintText="http://your-fhem-host:8083/" />
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 columns">
                    <RaisedButton label="Save" type="submit" primary={true} className="float-right" />
                  </div>
                </div>
              </form>
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
}

export default FhemURLInput
