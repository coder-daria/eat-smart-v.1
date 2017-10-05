import React from 'react';
import PropTypes from 'prop-types';

class Step extends React.Component {
  render() {
    let className;
    if (this.props.currentStep === this.props.whichStep) {
      className = 'active';
    }
    return <li className={className}>Step {this.props.whichStep}</li>;
  }
}

Step.propTypes = {};

export default Step;
