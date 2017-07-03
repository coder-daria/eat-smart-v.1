import React from 'react';
import { Line } from 'react-chartjs-2';
import {countGrams, caloriesPerDay} from './functions';

var goal = caloriesPerDay(2000, 20, 30, 50);
var diet = countGrams(goal);

var data = {
    labels: ["Fat", "Proteins", "Carbs"],
    datasets: [
        {
            label: "Calories",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [4, diet.proteins, diet.carbs],
        }
    ],
};

class Chart extends React.Component {
    render() {
        return (
            <Line data={data} width={600} height={250} />
        )
    }
}

export default Chart;

