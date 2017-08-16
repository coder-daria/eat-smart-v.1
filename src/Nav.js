import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'

const NavigationMenu = withRouter(({ history }) => (
    <Menu history={history} />
))

const styles = {
    tabs: {
        width: 1000,
        marginRight: "auto",
        marginLeft: "auto"
    },
    tab: {
        width: 250
    },
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '/addMeal',
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
                >
                <Tab label="Add food" value="/addFood" style={styles.tab}>
                </Tab>
                <Tab label="Edit Food" value="/editFood" style={styles.tab}>
                </Tab>
                <Tab label="Add meal" value="/addMeal" style={styles.tab}>
                </Tab>
                <Tab label="Preferences" value="/preferences" style={styles.tab}>
                </Tab>
            </Tabs>
        );
    }
}

const Nav = () => {
    return (
        <div>
            <NavigationMenu />
        </div>
    )

}

export default Nav;