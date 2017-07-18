import React from 'react';
import PreferencesButton from './PreferencesButton';
import PreferenceForm from './PreferenceForm';


class PreferencesParent extends React.Component {
    state = {
        showFormComponent: false
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
                {this.state.showFormComponent ? <PreferenceForm {...this.props} onClick={this.showForm}/> : <PreferencesButton onClick={this.showForm} {...this.props} />}
            </div>
        )
    }
}

export default PreferencesParent;