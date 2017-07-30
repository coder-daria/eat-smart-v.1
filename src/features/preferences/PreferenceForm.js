import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

class PreferenceForm extends React.Component {
  state = {
    name: "",
    seconds: 0
  }
  mealName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleTime = (hour) => {
      if(hour === null) {
        return;
      }
      console.log(moment(hour).minutes());
      let chosenUnixTimestamp = (moment(hour).unix()) * 1000; // seconds

      this.setState({
        seconds: chosenUnixTimestamp
      })

  }
  handleSave = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.showForm();
  }


  render() {
    return (
        <form id="preferencesContainer" onSubmit={this.handleSave}>
          Meal name :<input onChange={this.mealName} type="text" />
          Time: <br />
          <TimePicker defaultValue={moment()} showSecond={false} onChange={this.handleTime}/>
          <button type="submit" id="saveButton">Save</button>
        </form>
      )
  }
}

export default PreferenceForm;