import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DailyPercentagesGraph from '../statistics/DailyPercentagesGraph';
import MealPercentagesGraph from '../statistics/MealPercentagesGraph';
import TextTileStatistic from '../statistics/TextTileStatistic';
import { sumFoods, countKcalInMeal } from '../../functions';
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
      <div className="kcalEatenContainer">
        <div className="kcalEatenNumber">
          <h3>
            {summary.kcal}
          </h3>
          <h4>Eaten kcal</h4>
        </div>
        <div>
          <h3>
            {this.props.dailyKcal - summary.kcal}
          </h3>
          <h4>Kcal left to reach daily goal</h4>
        </div>
      </div>
    );
  };

  dailySummary = () => {
    const total =
      this.props.meals.length === 0
        ? <p>You have not eaten anything yet! </p>
        : this.renderDailyCalories();
    return (
      <div className="information">
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
      <ul className="chartDetails">
        <li>
          <div className="chartDetailsMealName">
            {this.state.selectedMeal.meal}
          </div>
        </li>
        <li>
          <div>
            <h3>Fat</h3>
          </div>
          <div>
            {selectedMealSummary.fat} g
          </div>
        </li>
        <li>
          <div>
            <h3>Protein</h3>
          </div>
          <div>
            {selectedMealSummary.protein} g
          </div>
        </li>
        <li>
          <div>
            <h3>Carbs</h3>
          </div>
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

    const roundedBorders = {
      borderRadius: '2em',
      border: '0.1em solid #90C3D4',
      padding: '1em',
      width: '15em',
      height: '15em'
    };

    return (
      <div className="summary">
        <div className="statistic">
          <TextTileStatistic dailySummary={this.dailySummary()} />
        </div>
        <div className="chooseMeal">
          <SelectField
            onChange={this.handleChange}
            floatingLabelText="Choose a meal"
          >
            {mealList}
          </SelectField>
        </div>
        <div className="chartAndDetailsContainer">
          <div className="chart">
            <div style={roundedBorders}>
              <MealPercentagesGraph />
            </div>
            <div style={roundedBorders}>
              <DailyPercentagesGraph />
            </div>
          </div>
          <div>
            {selectedMealDetails}
          </div>
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
