import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import AutoComplete from 'material-ui/AutoComplete';
import moment from 'moment';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class PreferenceForm extends React.Component {
  state = {
    name: "",
    seconds: 0,
    dataSource: []
  }
  mealName = (value) => {
    this.setState({
      name: value,
    })
  }

  handleTime = (time, object) => {
    let data = moment(object);
    let chosenUnixTimestamp = (moment(data).unix()) * 1000;

    if (object === null) {
      return;
    }
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
        Meal name :<br />
        <AutoComplete hintText="Type anything" dataSource={this.state.dataSource} onUpdateInput={this.mealName} /><br />
        <TimePicker format="24hr" hintText="Choose time" onChange={this.handleTime} />
        <RaisedButton label="Save" type="submit" primary={true} />
      </form>
    )
  }
}

PreferenceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired
};

export default PreferenceForm;