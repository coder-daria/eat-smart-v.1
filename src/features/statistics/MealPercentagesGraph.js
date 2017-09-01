import React from 'react';
import Chart from '../../Chart';
import { countGrams, caloriesPerDay } from '../../functions';

var goal = caloriesPerDay(3000, 50, 10, 40);
var diet = countGrams(goal);

var data = {
  labels: ['Fat', 'Proteins', 'Carbs'],
  datasets: [
    {
      label: 'Calories',
      backgroundColor: ['#2378d4', '#7298ff', '#15ADC1'],
      borderColor: '#FFFFFF',
      borderWidth: 2,
      hoverBackgroundColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
      hoverBorderColor: ['#6BD4D6', '#6BD4D6', '#6BD4D6'],
      data: [diet.fat, diet.protein, diet.carbs]
    }
  ]
};

class MealPercentagesGraph extends React.Component {
  render() {
    return <Chart data={data} />;
  }
}

export default MealPercentagesGraph;
