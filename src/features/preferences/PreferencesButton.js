import React from 'react';
import PropTypes from 'prop-types';

class PreferencesButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} id='addButton'>+</button>
      </div>
    )
  }
}

PreferencesButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default PreferencesButton;