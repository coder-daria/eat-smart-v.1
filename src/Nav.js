import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'

const NavigationMenu = withRouter(({ history }) => (
    <Menu history={history} />
))

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '/',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
        this.props.history.push(value);
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                className="tabs">
                <Tab label="Add food" value="/addFood">
                </Tab>
                <Tab label="Edit Food" value="/editFood">
                </Tab>
                <Tab label="Add meal" value="/addMeal">
                </Tab>
                <Tab label="Preferences" value="/preferences">
                </Tab>
            </Tabs>
        );
    }
}

const Nav = () => {
    return (
        <div>
            <NavigationMenu/>
        </div>
    )

}

export default Nav;