import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
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
       {/*<li>
        <NavLink activeClassName='active' to='/selectedFood'>
          Selected Food
        </NavLink>
      </li>*/}
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
       <li>
        <NavLink activeClassName='active' to='/demo'>
          DemoForm
        </NavLink>
      </li>
       <li>
        <NavLink activeClassName='active' to='/demoArray'>
          DemoFormArray
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;