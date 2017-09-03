import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DailyPercentagesGraph from '../statistics/DailyPercentagesGraph';
import MealPercentagesGraph from '../statistics/MealPercentagesGraph';
import StatisticCard from '../statistics/StatisticCard';
import { sumFoods, countKcalInMeal } from '../../functions';
import './mealsDetails.css';

class MealsDetails extends React.Component {
  state = {};

  handleChange = (event, index, value) => {
    // console.log(`event: ${event}, value: ${value}, index: ${index}`);
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
          <h3>{summary.kcal}</h3>
          <h4>Eaten kcal</h4>
        </div>
      </div>
    );
  };
  renderKcalLeft = () => {
    const summary = this.calculateSummaryOfDay(this.props.meals);
    return (
      <div className="kcalEatenContainer">
        <div>
          <h3>{this.props.dailyKcal - summary.kcal}</h3>
          <h4>Kcal left to reach daily goal</h4>
        </div>
      </div>
    );
  };

  dailySummary = () => {
    const total =
      this.props.meals.length === 0 ? (
        <p>You have not eaten anything yet! </p>
      ) : (
        this.renderDailyCalories()
      );
    return <div className="information">{total}</div>;
  };
  dailyKcalLeft = () => {
    const total =
      this.props.meals.length === 0 ? (
        <p>You have not eaten anything yet! </p>
      ) : (
        this.renderKcalLeft()
      );
    return <div className="information">{total}</div>;
  };

  calculateSelectedMeal = () => {
    let result = {
      fat: 0,
      carbs: 0,
      protein: 0
    };
    if (this.props.meals.length !== 0) {
      const selectedMeal = this.props.meals[this.props.selectedMeal];
      selectedMeal.foods.forEach(f => {
        const gramsPercent = f.quantity / 100;
        f.fat *= gramsPercent;
        f.protein *= gramsPercent;
        f.carbs *= gramsPercent;
      });
      result = selectedMeal.foods.reduce(sumFoods, result);
    }
    return result;
  };

  render() {
    return (
      <div className="summary">
        <div className="smallStatistic">
          <StatisticCard
            onClose={() => this.props.toggleStatisticCard('dailyCalories')}
            visible={this.props.details.dailyCalories}
            content={this.dailySummary()}
            title={'Your daily summary'}
          />
          <StatisticCard
            onClose={() =>
              this.props.toggleStatisticCard('caloriesLeftToDailyGoal')}
            visible={this.props.details.caloriesLeftToDailyGoal}
            content={this.dailyKcalLeft()}
            title={'Your daily summary'}
          />
        </div>
        <div className="bigStatistic">
          <StatisticCard
            onClose={() => this.props.toggleStatisticCard('mealCaloriesGraph')}
            visible={this.props.details.mealCaloriesGraph}
            size="big"
            content={
              <MealPercentagesGraph
                meal={this.calculateSelectedMeal()}
                size={250}
              />
            }
            title={'Meal chart'}
          />
          <StatisticCard
            onClose={() => this.props.toggleStatisticCard('dailyCaloriesGraph')}
            visible={this.props.details.dailyCaloriesGraph}
            size="big"
            content={<DailyPercentagesGraph size={250} />}
            title={'Daily chart'}
          />
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
