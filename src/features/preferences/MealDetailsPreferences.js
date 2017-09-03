import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import Detailed from 'material-ui/svg-icons/av/equalizer';
import Simple from 'material-ui/svg-icons/content/text-format';
import { Field } from 'redux-form';
import { renderCheckbox } from '../../common/form/FormFields';

function MealDetailsPreferences(props) {
  function buildLabel(content, type) {
    const typeIcon = type === 'graph' ? <Detailed /> : <Simple />;
    return (
      <div>
        {typeIcon}
        {content}
      </div>
    );
  }

  return (
    <div className="checkbox-preferences">
      <Field
        name="details.dailyCalories"
        label={buildLabel('Daily calories')}
        component={renderCheckbox}
      />
      <Field
        name="details.mealCalories"
        label={buildLabel('Meal calories')}
        component={renderCheckbox}
      />
      <Field
        name="details.caloriesLeftToDailyGoal"
        label={buildLabel('Calories left for daily goal')}
        component={renderCheckbox}
      />
      <Field
        name="details.mealCaloriesGraph"
        label={buildLabel('Meal calories: breakdown', 'graph')}
        component={renderCheckbox}
      />
      <Field
        name="details.dailyCaloriesGraph"
        label={buildLabel('Daily calories: breakdown', 'graph')}
        component={renderCheckbox}
      />
    </div>
  );
}

MealDetailsPreferences.propTypes = {};
MealDetailsPreferences.defaultProps = {};

export default MealDetailsPreferences;
