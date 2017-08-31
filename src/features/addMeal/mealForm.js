import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';
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
import SelectableList from '../../common/SelectableList';
import DayPickerContainer from '../../features/changeDate/DayPickerContainer';

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
          units: 'grams',
          isNew: true
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
            units: 'grams',
            isNew: true
          });
        }
      }
    };

    return (
      <div className="searchAndChipsContainer">
        <div className="addMealAutocomplete">
          <AutoComplete items={this.props.foodsToSearch} onSelect={addField} />
        </div>
        <div>
          <ul>
            {fieldArray.fields.map(this.renderField)}
          </ul>
        </div>
      </div>
    );
  };

  renderField = (field, index, fields) => {
    const remove = () => fields.remove(index);
    const formFields = (
      <div className="formContentContainer">
        <div className="form-name-quantity">
          <Field
            name={`${field}.name`}
            component={renderTextField}
            label="Name"
          />
        </div>
        <div className="form-quantity">
          <Field
            name={`${field}.quantity`}
            component={renderTextField}
            label="Quantity"
          />
        </div>
      </div>
    );
    const chipFields = (
      <div className="chipContentContainer">
        <div className="chip-name">
          <Field
            name={`${field}.name`}
            component={() => renderDiv(fields.get(index).name)}
          />
        </div>
        <div>
          <div className="chip-quantity">
            <div>
              <Field
                name={`${field}.quantity`}
                component={() => renderDiv(fields.get(index).quantity)}
              />
            </div>
            <div>g</div>
          </div>
        </div>
      </div>
    );
    return (
      <li key={index} className="chipItem">
        <EditableChip
          initiallyOpen={fields.get(index).isNew}
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
          value={preference.name}
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
        <div className="dayPicker">
          <DayPickerContainer />
        </div>
        <div className="addMealFormAndDetailsContainer">
          <form onSubmit={submit} className="addMealFormContainer">
            <div>
              <Field
                name="meal"
                component={field =>
                  <SelectableList
                    initialValue={field.input.value}
                    items={this.props.mealsPreferences}
                    onSelect={field.input.onChange}
                  />}
              />
            </div>
            <div>
              <FieldArray name="foods" component={this.renderFieldArray} />
            </div>
            <div className="addMealRaisedButton">
              <RaisedButton
                type="submit"
                label="OK"
                primary={true}
                disabled={disabled}
              />
            </div>
          </form>
          <div className="detailsContainer">
            <MealsDetailsContainer />
          </div>
        </div>
      </div>
    );
  }
}

MealForm.propTypes = {
  foods: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  mealsPreferences: PropTypes.array.isRequired,
  foodsToSearch: PropTypes.array.isRequired,
  addMeal: PropTypes.func.isRequired
};

export default MealForm;
