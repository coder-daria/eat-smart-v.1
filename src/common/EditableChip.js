import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

import R from 'ramda';
// import { blue300, indigo900 } from 'material-ui/styles/colors';

class EditableChip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      preference: R.clone(props.preference)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ preference: R.clone(nextProps.preference) });
  }

  handleRequestDelete = (key) => {
    this.props.removePreference(key);
  };

  updatePreference = () => {
    this.setState({ editing: false });
    this.props.onSave(this.state.preference);
  }

  changeName = (e, value) =>{
    this.setState(prevState => {
      prevState.preference.name = value;
      prevState.preference.index = this.props.index;
      return {
        preference: prevState.preference
      }
    })
  }

  form = (preference) => {
    return (
      <div>
        Meal name :<br />
        <TextField hintText="Type anything" value={preference.name} type="text" onChange={this.changeName} /><br />
        <button onClick={this.updatePreference}> click me </button>
      </div>
    )
  }

  chip = (preference) => {
    let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000;
    let formatedTime = moment(chosenUnixTimestamp).format("HH:mm");
    return (
      <Chip
        key={preference.name}
        onRequestDelete={() => this.handleRequestDelete(preference.name)}
        onClick={() => this.setState({ editing: true })}>
        {preference.name} at {formatedTime}
      </Chip>
    )
  }

  render() {
    const content = this.state.editing ? this.form(this.state.preference) : this.chip(this.state.preference);
    return (
      <div>
        {content}
      </div>
    )
  }
}

EditableChip.propTypes = {
  preference: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditableChip;