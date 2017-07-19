import React from 'react';
import PreferencesButton from './PreferencesButton';
import PreferenceForm from './PreferenceForm';
import PreferencesMeal from './PreferencesMeal';

class PreferencesParent extends React.Component {
  state = {
    showFormComponent: false,
    showPreferences: false
  }

  showChosenPreference = () => {
      this.setState({
        showPreferences: true
      })
  }

  showForm = () => {
    if (this.state.showFormComponent === false) {
      this.setState({
        showFormComponent: true
      })
    }
    else {
      this.setState({
        showFormComponent: false
      })
    }
  }

  render() {

    return (
      <div>
        {this.state.showPreferences ? <PreferencesMeal {...this.props} /> : <div> {"No preferences"}</div>}
        <br />
        {this.state.showFormComponent ? <PreferenceForm {...this.props} showForm={this.showForm} showPreferences={this.showChosenPreference}/> : <PreferencesButton onClick={this.showForm} {...this.props} />}
      </div>
    )
  }
}

export default PreferencesParent;