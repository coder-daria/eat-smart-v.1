import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {properties: {}}
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

class EditFoodChanges extends React.Component {

  renderTextField = field => {
    const errorText = field.meta.touched ? field.meta.error : null;
    return (
      <div>
        <label>
          {field.label}
        </label>
        <div>
          <TextField hintText={field.label} {...field.input} type={field.type} errorText={errorText} /><br />
        </div><br />
      </div>
    )
  }

  render() {
    return (
      <div className="addFoodContainer">
        <form onSubmit={this.props.handleSubmit}>
          <Field name="name" type="text" component={this.renderTextField} label="name" />
          <Field name="properties.fat" type="number" component={this.renderTextField} label="fat" />
          <Field name="properties.protein" type="number" component={this.renderTextField} label="protein" />
          <Field name="properties.carbs" type="number" component={this.renderTextField} label="carbs" />
          <RaisedButton label="Submit" type="submit" primary={true} />
        </form>
      </div>
    )
  }
}

EditFoodChanges.propTypes = {
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'EditFoodChanges',
  enableReinitialize: true,
  validate
})(EditFoodChanges)