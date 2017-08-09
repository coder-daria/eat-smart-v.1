import React from 'react';
import { NavLink } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom'

const NavigationMenu = withRouter(({ history}) => (
    <TabsExampleControlled history={history}/>
))

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
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
                <Tab label="Add food" value="/addFood">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab A</h2>
                        <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
                        </p>
                    </div>
                </Tab>
                <Tab label="Edit Food" value="/editFood">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}




const Nav = () => {
  return (
      <div>
          <NavigationMenu/>
      <ul className='nav'>
        <li>
          <NavLink activeClassName='active' to='/addFood'>
            Add new food
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/editFood'>
            Edit food
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/addMeal'>
            Add new meal
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/mealsDetails'>
            Meals details
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/preferences'>
            Preferences
        </NavLink>
        </li>
      </ul>
      </div>
  )
}

export default Nav;