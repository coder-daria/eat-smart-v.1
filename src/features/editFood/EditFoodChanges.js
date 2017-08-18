import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

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
    this.setState({foodBeingChanged: nextProps.selected});
  }

   changeName = (event, value) => {
    this.setState(prevState => {
      prevState.foodBeingChanged.name = value;
      return { 
        foodBeingChanged: prevState.foodBeingChanged 
      }
    });
  }
  handleInGeneral = type => (event, searchText) => {
      this.setState(prevState => {
        const foodBeingChanged = prevState.foodBeingChanged;
        foodBeingChanged.properties[type] = searchText;
        return { foodBeingChanged: foodBeingChanged }
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.foodBeingChanged);
  }

  renderName = field => {
    const foodToEdit = this.state.foodBeingChanged;
    const errorText = field.meta.touched ? field.meta.error : null;
    return (
      <div>
        <label>
          {field.label}
        </label>
        <div>
          <TextField hintText={field.label} value={foodToEdit.name} onChange={this.changeName} errorText={errorText} type="text"/>
        </div>
      </div>
    )
  }
  renderProperties = field => {
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
          <Field name="name" type="text" component={this.renderName} label="name" />
          <Field name="fat" type="number" component={this.renderProperties} label="fat" />
          <Field name="protein" type="number" component={this.renderProperties} label="protein" />
          <Field name="carbs" type="number" component={this.renderProperties} label="carbs" />
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