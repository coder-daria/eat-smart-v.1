import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Field } from 'redux-form';
import { renderTextField, renderTimePicker } from './FormFields'
import MaterialIcon from './MaterialIcon';

import ActionDone from 'material-ui/svg-icons/action/done';

import R from 'ramda';
import { cyan500} from 'material-ui/styles/colors';

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

  handleRequestDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete();
  };

  updatePreference = () => {
    this.setState({ editing: false });
  }

  form = (preference) => {
    return (
      <div>
        Meal name :<br />
        <Field name={`${this.props.name}.name`} type="text" component={renderTextField} />
        <Field name={`${this.props.name}.seconds`} component={renderTimePicker} />
        <MaterialIcon onClick={this.updatePreference}>
          <ActionDone  hoverColor={cyan500}/>
        </MaterialIcon>
      </div>
    )
  }

  chip = (preference) => {
    let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000;
    let formatedTime = moment(chosenUnixTimestamp).format("HH:mm");
    return (
      <Chip
        key={preference.name}
        onRequestDelete={this.handleRequestDelete}
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
  name: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditableChip;