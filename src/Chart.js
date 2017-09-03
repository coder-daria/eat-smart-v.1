import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends React.Component {
  render() {
    return (
      <Doughnut
        data={this.props.data}
        width={this.props.size}
        height={this.props.size}
      />
    );
  }
}

export default Chart;
