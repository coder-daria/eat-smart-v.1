import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
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
  return errors
}

class EditFoodChanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBeingChanged: this.props.selected,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ foodBeingChanged: nextProps.selected });
  }

  handleInGeneral = type => (event, searchText) => {
    if (type === "name") {
      this.setState(prevState => {
        const foodBeingChanged = prevState.foodBeingChanged;
        foodBeingChanged.name = searchText;
        return { foodBeingChanged: foodBeingChanged }
      });
    }
    else {
      this.setState(prevState => {
        const foodBeingChanged = prevState.foodBeingChanged;
        foodBeingChanged.properties[type] = searchText;
        return { foodBeingChanged: foodBeingChanged }
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.foodBeingChanged);
  }

  renderField = field => {
    // state stays the same
    const foodToEdit = this.state.foodBeingChanged;
    const errorText = field.meta.touched ? field.meta.error : null;
    return (
      <div>
        <label>
          {field.label}
        </label>
        <div>
          <TextField hintText={field.label} type={field.type} onChange={this.handleInGeneral(field.label)} errorText={errorText} value={foodToEdit.properties[field.label]}/><br />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="addFoodContainer">
        <form onSubmit={this.handleSubmit}>
          <Field name="name" type="text" component={this.renderField} label="name" />
          <Field name="fat" type="number" component={this.renderField} label="fat" />
          <Field name="protein" type="number" component={this.renderField} label="protein" />
          <Field name="carbs" type="number" component={this.renderField} label="carbs" />
          <RaisedButton label="Submit" type="submit" primary={true} />
        </form>

      </div>
    )
  }
}

EditFoodChanges.propTypes = {
  onSubmit: PropTypes.func,
  selected: PropTypes.object
};


export default reduxForm({
  form: 'EditFoodChanges',
  validate
})(EditFoodChanges)