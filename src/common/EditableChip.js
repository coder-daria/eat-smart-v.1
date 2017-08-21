import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Field } from 'redux-form';
import { renderTextField, renderTimePicker } from './FormFields'
import MaterialIcon from './MaterialIcon';

import ActionDone from 'material-ui/svg-icons/action/done';

import R from 'ramda';
import { cyan500 } from 'material-ui/styles/colors';

class EditableChip extends React.Component {
  state = {
    editing: false
  }

  toggleEdit = () => {
    this.setState({ editing: false });
  }

  form = (preference) => {
    return (
      <div className="chipContainer">
        <div className="chipName">
          <h3>Meal name:</h3>
          <Field name={`${this.props.name}.name`} type="text" component={renderTextField} />
        </div>
        <div className="chipTime">
          <h3>Time:</h3>
          <Field name={`${this.props.name}.seconds`} component={renderTimePicker} />
        </div>
        <MaterialIcon onClick={this.toggleEdit}>
          <ActionDone hoverColor={cyan500} />
        </MaterialIcon>
      </div>
    )
  }

  chip = () => {
    const preference = this.props.preference;
    let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000;
    let formatedTime = moment(chosenUnixTimestamp).format("HH:mm");
    return (
      <Chip
        key={preference.name}
        onRequestDelete={this.props.onDelete}
        onClick={() => this.setState({ editing: true })}>
        {preference.name} at {formatedTime}
      </Chip>
    )
  }

  render() {
    const preference = this.props.preference;
    const content = this.state.editing ? this.form() : this.chip();
    return (
      <div>
        {content}
      </div>
    )
  }
}

EditableChip.propTypes = {
  preference: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditableChip;