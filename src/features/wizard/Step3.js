import React from 'react';
import PropTypes from 'prop-types';

class Step3 extends React.Component {
  render() {
    let className;
    if (this.props.currentStep === 3) {
      className = 'active';
    }
    return <li className={className}>Step 3</li>;
  }
}

Step3.propTypes = {};

export default Step3;
