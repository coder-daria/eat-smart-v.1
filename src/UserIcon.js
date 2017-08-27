import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import './userIcon.css';
import Avatar from 'material-ui/Avatar';
import { withRouter } from 'react-router-dom';

const MenuWithHistory = withRouter(({ history }) =>
  <UserIcon history={history} />
);

class UserIcon extends Component {
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
      <IconButton className="menuButtonsContainer">
        <div className="menuButtonsContainer">
          <div>
            <Avatar
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/iri_girl_face-128.png"
              size={25}
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
            <MenuItem disabled={true} primaryText="Signed in as Daria" />
            <Divider />
            <MenuItem value="/preferences" primaryText="Preferences" />
            <Divider />
            <MenuItem disabled={true} primaryText="Sign out" />
          </IconMenu>
        </div>
      </div>
    );
  }
}

const Menu = () => {
  return (
    <div>
      <MenuWithHistory />
    </div>
  );
};

export default Menu;
