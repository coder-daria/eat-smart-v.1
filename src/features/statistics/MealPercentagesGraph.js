import React from 'react';
import Chart from '../../Chart';
import { countGrams, caloriesPerDay } from '../../functions';

class MealPercentagesGraph extends React.Component {
  render() {
    const dataFor = meal => {
      return {
        labels: ['Fat', 'Proteins', 'Carbs'],
        datasets: [
          {
            label: 'Calories',
            backgroundColor: ['#2378d4', '#7298ff', '#15ADC1'],
            borderColor: '#FFFFFF',
            borderWidth: 2,
            hoverBackgroundColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
            hoverBorderColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
            data: [meal.fat, meal.protein, meal.carbs]
          }
        ]
      };
    };

    return <Chart data={dataFor(this.props.meal)} {...this.props} />;
  }
}

export default MealPercentagesGraph;
