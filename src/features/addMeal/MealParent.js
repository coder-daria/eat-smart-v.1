import React from 'react';
import Meal from './Meal'
import Search from './Search';
import PropTypes from 'prop-types';
import './mealParent.css';

class MealParent extends React.Component {
  state = {
    foodToEdit: null
  }
  
  render() {
    return (
      <div className="mealParentContainer">
        <Search {...this.props}/>
        <Meal {...this.props}/>
      </div>
    )
  }
}

MealParent.propTypes = {
};


export default MealParent;