import React from 'react';
import moment from 'moment';

class Time extends React.Component {
  state = {
    date: moment(moment().unix() * 1000).format("HH:mm:ss")
  }
  componentDidMount = () => {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
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
