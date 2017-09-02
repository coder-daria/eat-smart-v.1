import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import './mealForm.css';
import MealsDetailsContainer from '../mealDetails/MealsDetailsContainer';
import MealList from './MealList';
import DayPickerContainer from '../../features/changeDate/DayPickerContainer';
import DoneAll from 'material-ui/svg-icons/action/done-all';

class MealForm extends React.Component {
  clearAndSubmit = values => {
    this.props.addMeal(values.meals, this.props.date);
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
          <form onSubmit={submit} className="outerAddMealFormContainer">
            <div className="innerAddMealFormContainer">
              <MealList
                foods={this.props.foods}
                meals={this.props.meals}
                // onSelect={field.input.onChange}
              />
            </div>
            <div className="addMealRaisedButton">
              <RaisedButton
                type="submit"
                label="OK"
                primary={true}
                disabled={disabled}
                icon={<DoneAll />}
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
  date: PropTypes.object.isRequired,
  foods: PropTypes.array.isRequired,
  addMeal: PropTypes.func.isRequired
};

export default MealForm;
