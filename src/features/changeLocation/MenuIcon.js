import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import './menuIcon.css';

class MenuIcon extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event, child) => {
    let value = child.props.value;
    this.props.history.push(value);
    this.props.onSelect(value);
  };

  icons = () => {
    return (
      <IconButton>
        <NavigationMenu />
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
      <div className="UserIconContainer">
        <div>
          <IconMenu
            iconButtonElement={this.icons()}
            menuItemStyle={styles.item}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
            value={this.props.currentPage}
            onItemTouchTap={this.handleClick}>
            <MenuItem value="/addMeal" primaryText="Add meal" />
            <MenuItem value="/addFood" primaryText="Add food" />
            <MenuItem value="/editFood" primaryText="Edit food" />
          </IconMenu>
        </div>
      </div>
    );
  }
}

export default MenuIcon;
