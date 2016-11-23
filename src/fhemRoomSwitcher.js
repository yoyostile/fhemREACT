import React from "react"
import _ from "lodash"
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core"

class FhemRoomSwitcher extends React.Component {
  render() {
    return <div className='b-fhem-room-switcher'>
      <Menu>
        { this.props.rooms.map((room, idx) => {
          return <MenuItem key={idx} onClick={this.props.handleRoomChange} text={room} disabled={this.props.activeRoom == room} />
        }) }
      </Menu>
    </div>
  }
}

export default FhemRoomSwitcher
