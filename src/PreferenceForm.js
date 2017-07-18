import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

class PreferenceForm extends React.Component {
  state = {
    name: "",
    hour: 0,
    minutes: 0
  }
  mealName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleTime = (hour) => {
      let date = hour._d;
      let hours = date.getHours();
      let minutes = date.getMinutes();

      this.setState({
        hour: hours,
        minutes: minutes
      })

  }
  handleUpdate = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.onClick();
  }

  render() {
    return (
        <form id="preferencesContainer" onSubmit={this.handleUpdate}>
          Meal name :<input onChange={this.mealName} type="text" />
          Time: <br />
          <TimePicker defaultValue={moment()} showSecond={false} onChange={this.handleTime}/>
          <button type="submit" id="saveButton">Save</button>
        </form>
      )
  }
}

export default PreferenceForm;