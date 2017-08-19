import React from 'react';
import PreferencesButton from './PreferencesButton';
import PreferenceForm from './PreferenceForm';
import PreferencesMeal from './PreferencesMeal';
import PropTypes from 'prop-types';
import { renderTextField } from '../../common/FormFields';
import RaisedButton from 'material-ui/RaisedButton';

import { Field, reduxForm } from 'redux-form';
import './preferencesParent.css';

class PreferencesParent extends React.Component {
  state = {
    showFormComponent: false,
  }

  showForm = () => {
    this.setState(prevState => {
      return {
        showFormComponent: !prevState.showFormComponent
      }
    });
  }

  render() {
    const areThereMeals = this.props.mealsPreferences.length > 0;
    const preferedMeals = areThereMeals ? <PreferencesMeal {...this.props} showForm={this.showForm} /> : <h2>{"No preferences"}</h2>;
    const disabled = this.props.invalid || this.props.pristine;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="kcal" type="text" component={renderTextField} label="Kcal" />
          <RaisedButton label="Save" type="submit" primary={true} disabled={disabled} />

          <h3> END OF FORM </h3>
        </form>

        <div>
          <br />
          {preferedMeals}
          <br />
          {this.state.showFormComponent ? <PreferenceForm {...this.props} showForm={this.showForm} showPreferences={this.showChosenPreference} /> : <PreferencesButton onClick={this.showForm} {...this.props} />}
        </div>
      </div>
    )
  }
}

PreferencesParent.propTypes = {
  mealsPreferences: PropTypes.array
};

export default PreferencesParent;
