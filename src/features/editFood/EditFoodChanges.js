import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../common/FormFields';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
  const errors = { properties: {} }
  if (!values.name) {
    errors.name = 'Required'
  }
  else if (values.name.length < 2) {
    errors.name = 'Chosen name is too short'
  }
  if (!values.properties.fat) {
    errors.properties.fat = 'Required'
  }
  if (!values.properties.protein) {
    errors.properties.protein = "Required";
  }
  if (!values.properties.carbs) {
    errors.properties.carbs = "Required";
  }
  return errors;
}

const EditFoodChanges = props => {
  const {invalid, handleSubmit } = props;
   return (
      <div>
        <form className="addFoodContainer" onSubmit={handleSubmit}>
          <Field name="name" type="text" component={renderTextField} label="name" />
          <Field name="properties.fat" type="number" component={renderTextField} label="fat" />
          <Field name="properties.protein" type="number" component={renderTextField} label="protein" />
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