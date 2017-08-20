import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import './menuIcon.css';

class MenuIcon extends Component {
    state = {
        valueSingle: '2',
    };

    handleChangeSingle = (event, value) => {
        this.setState({
            valueSingle: value,
        });
    };

    handleClick = (event, child) => {
        let value = child.props.value;
        if (value == 2) {
            // window.location.assign = 'http://localhost:3000/preferences';
        }
        if (value == 3) {
            // window.location = 'http://localhost:3000/addFood';
        }
        if (value == 4) {
            // window.location = 'http://localhost:3000/editFood';
        }
    }
    render() {
        const styles = {
            item: {
                fontSize: "15px",
            }
        }
        return (
            <div className="menuIconContainer">
                <p>Daria</p>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    menuItemStyle={styles.item}
                    targetOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    onChange={this.handleChangeSingle}
                    value={this.state.valueSingle}
                    onItemTouchTap={this.handleClick}
                >
                    <MenuItem value="1" primaryText="Signed in as Daria" />
                    <Divider />
                    <MenuItem value="2" primaryText="Preference" />
                    <MenuItem value="3" primaryText="Add food" />
                    <MenuItem value="4" primaryText="Edit food" />
                    <Divider />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
            </div>
        )
    }
}

export default MenuIcon;