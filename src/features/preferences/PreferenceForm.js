import React from 'react';
// import TimePicker from 'rc-time-picker';
import TimePicker from 'material-ui/TimePicker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

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

  handleTime = (time, object) => {
    let data = moment(object);
    let chosenUnixTimestamp = (moment(data).unix()) * 1000; 

    if (object === null) {
      return;
    }

    // let chosenUnixTimestamp = (moment(time).unix()) * 1000; // seconds

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
      <form onSubmit={this.handleSave}>
        Meal name :<br /><input onChange={this.mealName} type="text" /><br />
        <br />
          {/* <TimePicker defaultValue={moment()} showSecond={false} onChange={this.handleTime} /><br />   */}
          <TimePicker format="24hr" hintText="Choose time" onChange={this.handleTime}/>
        <button type="submit" id="saveButton">Save</button>
      </form>
    )
  }
}

PreferenceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired
};

export default PreferenceForm;