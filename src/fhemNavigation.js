import React from "react"
import { AppBar, Drawer, MenuItem, makeSelectable, List, ListItem, IconButton, IconMenu } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

let SelectableList = makeSelectable(List);

const Logout = (props) => {
  return (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon className="white-icon" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Sign out" onTouchTap={props.signOut} />
  </IconMenu>
)}

class FhemNavigation extends React.Component {

  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      open: this.props.activeRoom == ''
    }
  }

  handleRoomChange(event) {
    const room = event.target.textContent
    this.handleToggle()
    this.props.handleRoomChange(room)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleChange(e) {
    // console.log(e)
  }

  render() {
    return <div className='b-fhem-navigation'>
      <div className='b-fhem-navigation--top-bar'>
        <AppBar
          title={this.props.activeRoom || "reactFhem"}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<Logout signOut={this.props.resetFhemURL} />}
        />
      </div>
      <Drawer
        open={this.state.open}
        docked={false}
        width={280}
        onRequestChange={(open) => this.setState({open})}
        >
        <AppBar
          title="Rooms"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <SelectableList value={this.props.activeRoom} onChange={this.handleChange} >
          { this.props.rooms.map((room, idx) => {
            return <ListItem key={idx} onTouchTap={this.handleRoomChange} value={room}>{room}</ListItem>
          }) }
        </SelectableList>
      </Drawer>
    </div>
  }
}

export default FhemNavigation
