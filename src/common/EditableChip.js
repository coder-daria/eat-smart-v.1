import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Field } from 'redux-form';
import { renderTextField, renderTimePicker } from './form/FormFields'
import MaterialIcon from './MaterialIcon';
import ActionDone from 'material-ui/svg-icons/action/done';
import { cyan500, pink500 } from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';

class EditableChip extends React.Component {
  state = {
    editing: true
  };

  toggleEdit = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  buttons = () =>
    <div className="icon">
      <div>
        <MaterialIcon
          type="button"
          label="Remove"
          secondary={true}
          onClick={this.props.onDelete}
        >
          <ContentClear hoverColor={pink500} />
        </MaterialIcon>
      </div>
      <div>
        <MaterialIcon type="button" label="Accept" onClick={this.toggleEdit}>
          <ActionDone hoverColor={cyan500} />
        </MaterialIcon>
      </div>
    </div>;

  form = () => {
    return (
      <div className="chipContainer">
        {this.props.formFields}
        {this.buttons()}
      </div>
    )
  }

  chip = () => {
    return (
      <Chip
        className="Chip"
        onRequestDelete={this.props.onDelete}
        onClick={this.toggleEdit}
        labelColor="#353738"
        backgroundColor="#BEDEE8"
      >
        {this.props.chipFields}
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
  chipFields: PropTypes.object.isRequired,
  formFields: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EditableChip;