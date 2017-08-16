import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {countGrams, caloriesPerDay} from './functions';

var goal = caloriesPerDay(2000, 20, 30, 50);
var diet = countGrams(goal);

var data = {
    labels: ["Fat", "Proteins", "Carbs"],
    datasets: [
        {
            label: "Calories",
            backgroundColor: ["#F5F176", "#76E6F5","#F576B9"],
            borderColor: "#FFFFFF",
            borderWidth: 2,
            hoverBackgroundColor: ["#F5EF31","#2FDDF5", "#F5409F"],
            hoverBorderColor: ["#F5EF31","#2FDDF5", "#F5409F"],
            data: [diet.fat, diet.protein, diet.carbs],
        }
    ],
};

class Chart extends React.Component {
    render() {
        return (
            <Doughnut data={data} width="300px" height="300px"/>
        )
    }
}

export default Chart;

