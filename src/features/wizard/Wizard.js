import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './wizard.css';
import RaisedButton from 'material-ui/RaisedButton';

class Wizard extends React.Component {
  render() {
    const steps = [<Step1 />, <Step2 />, <Step3 />];
    const currentStep = this.props.wizardStep;
    const isFirstStep = currentStep === 1 ? true : false;
    const isLastStep = currentStep === steps.length ? true : false;
    return (
      <div className="wizardContainer">
        <ul className="wizard">
          <Step1 currentStep={currentStep} />
          <Step2 currentStep={currentStep} />
          <Step3 currentStep={currentStep} />
        </ul>
        <div className="wizardButtons">
          <RaisedButton
            label="previous"
            type="submit"
            primary={true}
            disabled={isFirstStep}
            onClick={() => this.props.changePage(-1)}
          />
          <RaisedButton
            label="next"
            type="submit"
            primary={true}
            disabled={isLastStep}
            onClick={() => this.props.changePage(+1)}
          />
        </div>
      </div>
    );
  }
}

Wizard.propTypes = {};

export default Wizard;
