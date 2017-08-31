import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends React.Component {
  render() {
    return <Doughnut data={this.props.data} width={300} height={300} />;
  }
}

export default Chart;
