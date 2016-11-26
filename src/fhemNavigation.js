import React from "react"
import { AppBar, Drawer, Menu, MenuItem, IconButton, IconMenu } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'


const Logout = (props) => {
  console.log(props)
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

  render() {
    return <div className='b-fhem-navigation'>
      <AppBar
        title={this.props.activeRoom || "reactFhem"}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={<Logout signOut={this.props.resetFhemURL} />}
      />
      <Drawer open={this.state.open} docked={false}>
        <AppBar
          title="Rooms"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Menu>
          { this.props.rooms.map((room, idx) => {
            return <MenuItem key={idx} onTouchTap={this.handleRoomChange} disabled={this.props.activeRoom == room}>{room}</MenuItem>
          }) }
        </Menu>
      </Drawer>
    </div>
  }
}

export default FhemNavigation
