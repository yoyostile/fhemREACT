import React from "react"
import { AppBar, Drawer, Menu, MenuItem, IconButton } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

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
        title="reactFhem"
        onLeftIconButtonTouchTap={this.handleToggle}
        onRightIconButtonTouchTap={this.props.resetFhemURL}
        iconElementRight={<IconButton><NavigationClose /></IconButton>}
      />
      <Drawer open={this.state.open}>
        <AppBar title="Rooms" onLeftIconButtonTouchTap={this.handleToggle} />
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
