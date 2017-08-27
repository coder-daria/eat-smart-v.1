import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import './menuIcon.css';
import Avatar from 'material-ui/Avatar';

class MenuIcon extends Component {
  state = {
    valueSingle: '2'
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value
    });
  };

  handleClick = (event, child) => {
    let value = child.props.value;
    if (value === '2') {
      // window.location.assign = 'http://localhost:3000/preferences';
    }
    if (value === '3') {
      // window.location = 'http://localhost:3000/addFood';
    }
    if (value === '4') {
      // window.location = 'http://localhost:3000/editFood';
    }
  };
  icons = () => {
    return (
      <IconButton className="menuButtonsContainer">
        <div className="menuButtonsContainer">
          <div>
            <Avatar
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/iri_girl_face-128.png"
              size={30}
            />
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
      </IconButton>
    );
  };
  render() {
    const styles = {
      item: {
        fontSize: '15px'
      }
    };
    return (
      <div className="menuIconContainer">
        <div>
          <IconMenu
            iconButtonElement={this.icons()}
            menuItemStyle={styles.item}
            anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
            onChange={this.handleChangeSingle}
            value={this.state.valueSingle}
            onItemTouchTap={this.handleClick}
          >
            <MenuItem value="1" primaryText="Signed in as Daria" />
            <Divider />
            <MenuItem value="2" primaryText="Preferences" />
            <MenuItem value="3" primaryText="Add food" />
            <MenuItem value="4" primaryText="Edit food" />
            <Divider />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </div>
      </div>
    );
  }
}

export default MenuIcon;
