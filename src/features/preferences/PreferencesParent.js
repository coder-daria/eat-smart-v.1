import React from 'react';
import PreferencesButton from './PreferencesButton';
import PreferenceForm from './PreferenceForm';
import PreferencesMeal from './PreferencesMeal';
import PropTypes from 'prop-types';

class PreferencesParent extends React.Component {
  state = {
    showFormComponent: false,
  }

  showForm = () => {
    this.setState(prevState => {
      return {
        showFormComponent : !prevState.showFormComponent
      }
    });
  }

  render() {
    const areThereMeals = this.props.mealsPreferences.length > 0;
    const preferedMeals = areThereMeals ? <PreferencesMeal {...this.props} /> : <div> {"No preferences"}</div>;
    return (
      <div>
        {preferedMeals}
        <br />
        {this.state.showFormComponent ? <PreferenceForm {...this.props} showForm={this.showForm} showPreferences={this.showChosenPreference}/> : <PreferencesButton onClick={this.showForm} {...this.props} />}
      </div>
    )
  }
}

PreferencesParent.propTypes = {
    mealsPreferences: PropTypes.array 
};

export default PreferencesParent;