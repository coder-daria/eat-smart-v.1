import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chart from '../../Chart.js';
import { sumFoods, countKcalInFood, countKcalInMeal } from '../../functions';
import './mealsDetails.css';

class MealsDetails extends React.Component {
  state = {};

  handleChange = (event, index, value) => {
    console.log(`event: ${event}, value: ${value}, index: ${index}`);
    if (value !== 'empty') {
      this.setState({ selectedMeal: this.props.meals[index] });
    }
  };

  calculateSummaryOfDay = meals => {
    const summary = {};
    summary.kcal = meals.map(countKcalInMeal).reduce((x, y) => x + y, 0);
    return summary;
  };

  renderDailyCalories = () => {
    const summary = this.calculateSummaryOfDay(this.props.meals);
    return (
      <div>
        Kcal eaten: {summary.kcal}
        Kcal to reach daily goal: {this.props.dailyKcal - summary.kcal}
      </div>
    );
  };

  dailySummary = () => {
    const total =
      this.props.meals.length === 0
        ? <p>You have not eaten anything yet! </p>
        : this.renderDailyCalories();
    return (
      <div>
        {total}
      </div>
    );
  };

  renderSelectedMeal = () => {
    const selectedMealSummary = this.state.selectedMeal.foods.reduce(sumFoods, {
      fat: 0,
      carbs: 0,
      protein: 0
    });
    return (
      <ul className="specificDetails">
        <li>
          <h3>Name</h3>
          <div>
            {this.state.selectedMeal.name}
          </div>
        </li>
        <li>
          <h3>Fat</h3>
          <div>
            {selectedMealSummary.fat} g
          </div>
        </li>
        <li>
          <h3>Protein</h3>
          <div>
            {selectedMealSummary.protein} g
          </div>
        </li>
        <li>
          <h3>Carbs</h3>
          <div>
            {selectedMealSummary.carbs} g
          </div>
        </li>
      </ul>
    );
  };

  render() {
    const selectedMealDetails = this.state.selectedMeal
      ? this.renderSelectedMeal()
      : null;

    const mealList = this.props.meals.map(item => {
      return (
        <MenuItem key={item.meal} value={item.meal} primaryText={item.meal} />
      );
    });

    return (
      <div className="mealsDetailsContainer">
        <div>
          <h2>Your daily summary</h2>
          {this.dailySummary()}
        </div>
        <div>
          <h2>Meal details</h2>
        </div>
        <div className="chooseMeal">
          <SelectField
            onChange={this.handleChange}
            floatingLabelText="Choose a meal"
          >
            {mealList}
          </SelectField>
        </div>
        <div className="chart">
          <Chart />
        </div>
        <div>
          {selectedMealDetails}
        </div>
      </div>
    );
  }
}

MealsDetails.propTypes = {
  onSelect: PropTypes.func.isRequired,
  meals: PropTypes.array.isRequired
};

export default MealsDetails;
