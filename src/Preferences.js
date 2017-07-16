import React from 'react';
import PreferenceForm from './PreferenceForm';

class Preferences extends React.Component {
  state = {
    listOfPreferencesForm: []
  }
  addPreference = () => {
    const formList = this.state.listOfPreferencesForm;
    this.setState({
      listOfPreferencesForm: formList.concat(<PreferenceForm />)
    })
    console.log(this.state.listOfPreferencesForm)
  }
  render() {
    return (
      <div className='preferencesContainer'>
        <button onClick={this.addPreference}>+</button>
            {this.state.listOfPreferencesForm}
      </div>
    )
  }
}

export default Preferences;