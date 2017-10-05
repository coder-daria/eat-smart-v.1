import React from 'react';
import PropTypes from 'prop-types';

class Step1 extends React.Component {
  render() {
    let className;
    if (this.props.currentStep === 1) {
      className = 'active';
    }
    return <li className={className}>Step 1</li>;
  }
}

Step1.propTypes = {};

export default Step1;
