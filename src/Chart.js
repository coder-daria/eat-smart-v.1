import React from 'react';
import { Line } from 'react-chartjs-2';

var chartData = {
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First Dataset',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStype: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'black',
                pointStyle: 'rectRounded',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,191,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    }
};


class Chart extends React.Component {
    render() {
        return (
            <Line data={chartData.data} width="600" height="250" />
        )
    }
}

export default Chart;

