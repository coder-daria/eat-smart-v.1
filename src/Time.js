import React from 'react';
import moment from 'moment';

class Time extends React.Component {
  state = {
    intervalId: -1,
    date: moment(moment().unix() * 1000).format("HH:mm:ss")
  }
  componentDidMount = () => {
    const intervalId = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({intervalId});
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  tick = () => {
    this.setState({
      date: moment(moment().unix() * 1000).format("HH:mm:ss")
    })
  }
  render() {
    return (
      <h2> {this.state.date} </h2>
     
    )
  }
}

export default Time;
