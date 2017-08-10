import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'
import MenuIcon from './MenuIcon';


const NavigationMenu = withRouter(({ history }) => (
    <Menu history={history} />
))

const styles = {
    tabs: {
        width: 1500,
        marginRight: "auto",
        marginLeft: "auto"
    },
    tab: {
        width: 300
    },
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '/addFood',
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
                style={styles.tabs}>
                <Tab label="Add food" value="/addFood" style={styles.tab}>
                </Tab>
                <Tab label="Edit Food" value="/editFood" style={styles.tab}>
                </Tab>
                <Tab label="Add meal" value="/addMeal" style={styles.tab}>
                </Tab>
                <Tab label="Meals details" value="/mealsDetails" style={styles.tab}>
                </Tab>
                <Tab label="Preferences" value="/preferences" style={styles.tab}>
                </Tab>
            </Tabs>
        );
    }
}

const Nav = () => {
    return (
        <div className="menuContainer">
            <NavigationMenu className="navigation" />
            <MenuIcon className="navigation" />
        </div>
    )

}

export default Nav;