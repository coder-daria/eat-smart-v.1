import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Field } from 'redux-form';
import { renderTextField, renderTimePicker } from './form/FormFields'
import MaterialIcon from './MaterialIcon';
import ActionDone from 'material-ui/svg-icons/action/done';
import { cyan500 } from 'material-ui/styles/colors';

class EditableChip extends React.Component {
  state = {
    editing: false
  }

  toggleEdit = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };
  form = (field, index, fields) => {
    return (
      <div className="chipContainer">
        <div className="chipName">
          <div>
            <h3>Meal name:</h3>
          </div>
          <div className="chipTextField">
            <Field
              name={`${field}.name`}
              type="text"
              component={renderTextField}
            />
          </div>
        </div>
        <div className="chipTime">
          <div>
            <h3>Time:</h3>
          </div>
          <div>
            <Field name={`${field}.seconds`} component={renderTimePicker} />
          </div>
        </div>
        <div className="chipButton">
          <MaterialIcon onClick={this.toggleEdit}>
            <ActionDone hoverColor={cyan500} />
          </MaterialIcon>
        </div>
      </div>
    )
  }

  chip = (field, index, fields) => {
    const preference = fields.get(index);
    const renderPreferenceName = field =>
      <div>
        {preference.name}
      </div>;
    const renderPreferenceTime = field => {
      let chosenUnixTimestamp = moment(preference.seconds).unix() * 1000;
      let formatedTime = moment(chosenUnixTimestamp).format('HH:mm');
      return (
        <div>
          {formatedTime}
        </div>
      );
    };
    return (
      <Chip
        className="Chip"
        onRequestDelete={this.props.onDelete}
        onClick={this.toggleEdit}
        labelColor="#353738"
        backgroundColor="#BEDEE8"
      >
        <Field name={`${field}.name`} component={renderPreferenceName} />
        <Field name={`${field}.seconds`} component={renderPreferenceTime} />
      </Chip>
    )
  }

  render() {
    const { field, index, fields } = this.props;
    const content = this.state.editing
      ? this.form(field, index, fields)
      : this.chip(field, index, fields);
    return (
      <div>
        {content}
      </div>
    )
  }
}

EditableChip.propTypes = {
  field: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  fields: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EditableChip;