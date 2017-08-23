import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../common/FormFields';
import AutoComplete from '../../common/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import './editFoodChanges.css';
import R from 'ramda';

const validate = values => {
  const errors = {}
  if(!values.selected){
    return errors;
  }
  errors.selected = {};
  if (!values.selected.name) {
    errors.selected.name = 'Required'
  }
  else if (values.selected.name.length < 2) {
    errors.selected.name = 'Chosen name is too short'
  }
  if (!values.selected.fat) {
    errors.selected.fat = 'Required'
  }
  if (!values.selected.protein) {
    errors.selected.protein = "Required";
  }
  if (!values.selected.carbs) {
    errors.selected.carbs = "Required";
  }
  if(R.isEmpty(errors.selected)){
    return {};
  } else {
    return errors;
  }
}

const EditFoodChanges = props => {

  const clearAndSubmit = values => {
    props.onSubmit(values.selected);
    props.reset();
  }

  const renderEditFood = () => {
    return (
      <div className="food editFoodFormContainer">
        <div>
          <Field className="editFoodField" name="selected.name" type="text" component={renderTextField} label="Name" />
        </div>
        <div>
          <Field className="editFoodField" name="selected.fat" type="number" component={renderTextField} label="Fat" />
        </div>
        <div>
          <Field className="editFoodField" name="selected.protein" type="number" component={renderTextField} label="Protein" />
        </div>
        <div>
          <Field className="editFoodField" name="selected.carbs" type="number" component={renderTextField} label="Carbs" />
        </div>
        <RaisedButton className="editFoodRaisedButton" label="Submit" type="submit" primary={true} disabled={disabled} />
      </div>
    )
  }

  const renderAutoComplete = field => {
    return (
      <div>
        <AutoComplete
          items={props.foods}
          onSelect={(name, food) => field.input.onChange(food)}
        />
      </div>
    )
  }

  const submit = props.handleSubmit(clearAndSubmit);
  const disabled = props.invalid || props.pristine;
  const editFood = props.isSelected ? renderEditFood() : null;
  return (
    <div className="editFoodParentContainer">
      <form onSubmit={submit}>
        <div className="search">
          <Field name="selected" component={renderAutoComplete} label="Select food" />
        </div>
        {editFood}
      </form>
      <div className="img">
        <img alt="img" src="http://del.h-cdn.co/assets/16/17/980x653/gallery-1461593822-delish-mexican-chicken-pasta-1.jpg" />
      </div>
    </div>
  )
}

EditFoodChanges.propTypes = {
  onSubmit: PropTypes.func,
  foods: PropTypes.array
};

export default reduxForm({
  form: 'EditFoodChanges',
  enableReinitialize: true,
  validate
})(EditFoodChanges)