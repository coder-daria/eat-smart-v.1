import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from '../../common/FormFields';
import RaisedButton from 'material-ui/RaisedButton';
import './editFoodChanges.css';

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
        <form className="editFoodFormContainer" onSubmit={handleSubmit}>
          <div>
          <Field className="editFoodField" name="name" type="text" component={renderTextField} label="Name" />
          </div>
          <div>
          <Field className="editFoodField" name="fat" type="number" component={renderTextField} label="Fat" />
          </div>
          <div>
          <Field className="editFoodField" name="protein" type="number" component={renderTextField} label="Protein" />
          </div>
          <div>
          <Field className="editFoodField" name="carbs" type="number" component={renderTextField} label="Carbs" />
          </div>
          <RaisedButton className="editFoodRaisedButton" label="Submit" type="submit" primary={true} disabled={invalid} />
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