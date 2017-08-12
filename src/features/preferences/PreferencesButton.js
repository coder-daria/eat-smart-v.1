import React from 'react';
import PropTypes from 'prop-types';
import AddButton from "../../AddButton";

class PreferencesButton extends React.Component {
  render() {
    return (
      <div>
        <AddButton onTouchTap={this.props.onClick}/>
      </div>
    )
  }
}

PreferencesButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default PreferencesButton;