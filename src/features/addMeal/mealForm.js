import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {
  renderSelectField,
  renderDiv,
  renderTextField
} from '../../common/form/FormFields';
import './mealForm.css';
import MealsDetailsContainer from '../mealDetails/MealsDetailsContainer';
import EditableChip from '../../common/EditableChip';
import MenuItem from 'material-ui/MenuItem';

const validate = values => {
  const errors = { meal: '', foods: [] };
  if (!values.meal) {
    errors.meal = 'Required';
  }
  if (!values.foods || !values.foods.length) {
    errors.foods = { _error: 'Select at least one food' };
  } else {
    const foodsArrayErrors = [];

    values.foods.forEach((food, index) => {
      const foodErrors = {};
      if (!food || !food.quantity || isNaN(food.quantity)) {
        foodErrors.quantity = 'Required';
        foodsArrayErrors[index] = foodErrors;
      }
    });
    if (foodsArrayErrors.length) {
      errors.foods = foodsArrayErrors;
    }
  }
  return errors;
};

class MealForm extends React.Component {
  componentWillUnmount() {
    this.props.reset();
  }

  renderFieldArray = fieldArray => {
    const addField = (name, food) => {
      if (fieldArray.fields.length === 0) {
        fieldArray.fields.push({
          name: food.name,
          id: food.id,
          units: 'grams'
        });
      } else {
        let itEquals = false;
        for (let i = 0; i < fieldArray.fields.length; i++) {
          if (fieldArray.fields.get(i).name === name) {
            itEquals = true;
          }
        }
        if (itEquals === false) {
          return fieldArray.fields.push({
            name: food.name,
            id: food.id,
            units: 'grams'
          });
        }
      }
    };

    return (
      <div>
        <AutoComplete items={this.props.foodsToSearch} onSelect={addField} />
        <ul>
          {fieldArray.fields.map(this.renderField)}
        </ul>
      </div>
    );
  };

  renderField = (field, index, fields) => {
    const remove = () => fields.remove(index);
    const formFields = (
      <div>
        <Field
          name={`${field}.name`}
          component={renderTextField}
          label="Name"
        />
        <Field
          name={`${field}.quantity`}
          component={renderTextField}
          label="Quantity"
        />
      </div>
    );
    const chipFields = (
      <div>
        <Field
          name={`${field}.name`}
          component={() => renderDiv(fields.get(index).name)}
        />
        <Field
          name={`${field}.quantity`}
          component={() => renderDiv(fields.get(index).quantity)}
        />
      </div>
    );
    return (
      <li key={index}>
        <EditableChip
          onDelete={remove}
          chipFields={chipFields}
          formFields={formFields}
        />
      </li>
    );
  };

  renderMealPreferences = () => {
    let selectPreference = this.props.mealsPreferences.map(preference => {
      return (
        <MenuItem
          value={preference}
          primaryText={preference.name}
          key={preference.name}
        />
      );
    });
    return (
      <div className="mealPreferences">
        <Field
          name="meal"
          component={renderSelectField}
          className="someClass"
          label="Meal"
        >
          {selectPreference}
        </Field>
      </div>
    );
  };

  clearAndSubmit = values => {
    this.props.addMeal(values, this.props.date);
    this.props.reset();
  };

  render() {
    const submit = this.props.handleSubmit(this.clearAndSubmit);
    const disabled = this.props.invalid || this.props.pristine;
    return (
      <div className="addMealContainer">
        <form className="mealParentContainer" onSubmit={submit}>
          <div>
            {this.renderMealPreferences()}
          </div>
          <div>
            <FieldArray name="foods" component={this.renderFieldArray} />
          </div>
          <div className="mealRaisedButton">
            <RaisedButton
              type="submit"
              label="Submit"
              primary={true}
              disabled={disabled}
            />
          </div>
        </form>
        <MealsDetailsContainer />
      </div>
    );
  }
}

MealForm.propTypes = {
  foods: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  foodsToSearch: PropTypes.array.isRequired,
  addMeal: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addMeal',
  destroyOnUnmount: false,
  validate
})(MealForm);
