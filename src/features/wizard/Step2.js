import React from 'react';
import PropTypes from 'prop-types';

class Step2 extends React.Component {
  render() {
    let className;
    if (this.props.currentStep === 2) {
      className = 'active';
    }
    return <li className={className}>Step 2</li>;
  }
}

Step2.propTypes = {};

export default Step2;
