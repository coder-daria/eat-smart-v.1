import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import './menuIcon.css';
import { withRouter } from 'react-router-dom';

const IconWithHistory = withRouter(({ history }) =>
  <MenuIcon history={history} />
);

class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '/'
    };
  }

  handleClick = (event, child) => {
    let value = child.props.value;
    this.setState({
      value: value
    });
    this.props.history.push(value);
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
            anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
            value={this.state.value}
            onItemTouchTap={this.handleClick}
          >
            <MenuItem value="/addMeal" primaryText="Add meal" />
            <MenuItem value="/addFood" primaryText="Add food" />
            <MenuItem value="/editFood" primaryText="Edit food" />
          </IconMenu>
        </div>
      </div>
    );
  }
}

const Menu = () => {
  return (
    <div>
      <IconWithHistory />
    </div>
  );
};

export default Menu;
