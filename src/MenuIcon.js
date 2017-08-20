import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import './menuIcon.css';

class MenuIcon extends Component {
    state = {
        valueSingle: '3',
    };

    handleChangeSingle = (event, value) => {
        this.setState({
            valueSingle: value,
        });
    };

    render() {
        return (
            <div className="menuIconContainer">
                <p>Daria</p>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    onChange={this.handleChangeSingle}
                    value={this.state.valueSingle}
                >
                    <MenuItem value="2" primaryText="Preference" />
                    <MenuItem value="4" primaryText="Sign out" />
                </IconMenu>
            </div>
        )
    }
}

export default MenuIcon;