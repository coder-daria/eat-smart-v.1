import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../common/FormFields';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
  const errors = {  }
  if (!values.name) {
    errors.name = 'Required'
  }
  else if (values.name.length < 2) {
    errors.name = 'Chosen name is too short'
  }
  if (!values.fat) {
    errors.fat = 'Required'
  }
  if (!values.protein) {
    errors.protein = "Required";
  }
  if (!values.carbs) {
    errors.carbs = "Required";
  }
  return errors;
}

const EditFoodChanges = props => {
  const {invalid, handleSubmit } = props;
   return (
      <div>
        <form className="editFoodForm" onSubmit={handleSubmit}>
          <h2>Name</h2>
          <Field name="name" type="text" component={renderTextField} label="name" />
          <h2>Fat</h2>
          <Field name="properties.fat" type="number" component={renderTextField} label="fat" />
          <h2>Protein</h2>
          <Field name="properties.protein" type="number" component={renderTextField} label="protein" />
          <h2>Carbs</h2>
          <Field name="properties.carbs" type="number" component={renderTextField} label="carbs" />
          <RaisedButton className="raisedButton" label="Submit" type="submit" primary={true} disabled={invalid} />
        </form>
      </div>
    )
}

EditFoodChanges.propTypes = {
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'EditFoodChanges',
  enableReinitialize: true,
  validate
})(EditFoodChanges)