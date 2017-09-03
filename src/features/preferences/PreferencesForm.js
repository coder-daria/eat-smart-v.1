import React from 'react';
import PropTypes from 'prop-types';
import {
  renderTextField,
  renderFieldArray
} from '../../common/form/FormFields';
import { Field, FieldArray } from 'redux-form';
import './preferencesForm.css';
import ReturnButton from '../../common/form/ReturnButton';
import PreferencesGroup from './PreferencesGroup';
import SubmitButton from '../../common/form/SubmitButton';
import MealDetailsPreferences from './MealDetailsPreferences';
import HorizontalDivider from '../../common/HorizontalDivider';

class PreferencesParent extends React.Component {
  render() {
    const disabled = this.props.invalid || this.props.pristine;
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
          className="preferencesContainer">
          <div className="preferencesKcalContainer">
            <PreferencesGroup
              name="Kcal preferences"
              className="title-kcal-preferences">
              <Field
                name="kcal"
                type="number"
                component={renderTextField}
                label="Kcal"
              />
            </PreferencesGroup>
          </div>
          <HorizontalDivider className="divider-preferences" />
          <div className="chips-preferences">
            <div>
              <PreferencesGroup
                name="Your meal preferences"
                className="your-meal-preferences">
                <div>
                  <FieldArray name="meals" component={renderFieldArray} />
                </div>
              </PreferencesGroup>
            </div>
          </div>
          <HorizontalDivider className="divider-preferences" />
          <div className="displaying-details">
            <PreferencesGroup
              name="Meal details preferences"
              className="meal-details-preferences">
              <MealDetailsPreferences />
            </PreferencesGroup>
          </div>
          <div className="preferencesButtons">
            <div>
              <SubmitButton className="submitPreferencesButton" />
            </div>
            <div>
              <ReturnButton className="returnButton" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PreferencesParent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default PreferencesParent;
