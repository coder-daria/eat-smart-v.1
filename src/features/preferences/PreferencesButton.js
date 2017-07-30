import React from 'react';
import PreferenceForm from './PreferenceForm';


class PreferencesButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} id='addButton'>+</button>
      </div>
    )
  }
}

export default PreferencesButton;