import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { Field } from 'redux-form';
import { renderTextField, renderTimePicker } from './FormFields'
import MaterialIcon from './MaterialIcon';
import ActionDone from 'material-ui/svg-icons/action/done';
import { cyan500, pink500 } from 'material-ui/styles/colors';
import ContentClear from 'material-ui/svg-icons/content/clear';

class EditableChip1 extends React.Component {
  state = {
    editing: true
  }

  toggleEdit = () => {
    this.setState(prevState => ({editing: !prevState.editing }));
  }

  form = (field, index, fields) => {
    const renderFoodName = field => <div className="specificName">{field.input.value}</div>;
    return (
        <li key={index} className="mealContainer">
            <div className="mealHeader">
                <div className="name">
                    <Field name={`${field}.name`} type="text" component={renderFoodName} label="Name" />
                </div>
                <div className="icon">
                    <div>
                        <MaterialIcon type="button" label="Remove" secondary={true} onClick={this.props.onDelete}>
                            <ContentClear hoverColor={pink500} />
                        </MaterialIcon>
                    </div>
                    <div>
                        <MaterialIcon type="button" label="Accept" onClick={this.toggleEdit}>
                            <ActionDone hoverColor={cyan500} />
                        </MaterialIcon>
                    </div>
                </div>
            </div>
            <div className="quantity">
                <Field name={`${field}.quantity`} type="number" component={renderTextField} label="Quantity" />
            </div>
        </li>
    )
}

chip = (field, index, fields) => {
    const food = fields.get(index);
    const renderFoodName = field => <div>{food.name}</div>;
    const renderFoodQuantity = field => <div>{food.quantity}</div>;
    
    return (
      <Chip
        className="Chip"
        onRequestDelete={this.props.onDelete}
        onClick={this.toggleEdit}
        labelColor="#353738"
        backgroundColor="#BEDEE8">
        <Field name={`${field}.name`} component={renderFoodName}/>
        <Field name={`${field}.quantity`} component={renderFoodQuantity} />
      </Chip>
    )
  }

  render() {
    const { field, index, fields} = this.props;
    const content = this.state.editing ? this.form(field, index, fields) : this.chip(field, index, fields);
    return (
      <div>
        {content}
      </div>
    )
  }
}

EditableChip1.propTypes = {
  field: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EditableChip1;