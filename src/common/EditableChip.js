import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import MaterialIcon from './MaterialIcon';
import ActionDone from 'material-ui/svg-icons/action/done';
import { cyan500, pink500 } from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';
import "./editableChip.css";

class EditableChip extends React.Component {
  state = {
    editing: true
  };

  toggleEdit = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  acceptButton = () => {
    return (
      <div className="acceptButton">
        <MaterialIcon type="button" label="Accept" onClick={this.toggleEdit}>
          <ActionDone hoverColor={cyan500} />
        </MaterialIcon>
      </div>
    )
  }
  removeButton = () => {
    return (
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
    )
  }
  form = () => {
    return (
      <div className="eachFormContainer">
        <div className="icons">
          {this.removeButton()}
        </div>
        <div className="content">
          {this.props.formFields}
        </div>
        <div className="icons">
          {this.acceptButton()}
        </div>
      </div>
    )
  }

  chip = () => {
    return (
      <Chip
        className="chip"
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
    const content = this.state.editing ? this.form() : this.chip();
    return (
      <div>
        {content}
      </div>
    )
  }
}

EditableChip.propTypes = {
  chipFields: PropTypes.object.isRequired,
  formFields: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EditableChip;