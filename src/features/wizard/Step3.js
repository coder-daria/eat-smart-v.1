import React from 'react';
import PropTypes from 'prop-types';

class Step3 extends React.Component {
  render() {
    return (
      <form>
        <p>Choose page language</p>
        <div className="custom-controls-stacked d-block my-3">
          <label className="custom-control custom-radio">
            <input
              id="radioStacked1"
              name="radio-stacked"
              type="radio"
              className="custom-control-input"
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">English</span>
          </label>
          <label className="custom-control custom-radio">
            <input
              id="radioStacked2"
              name="radio-stacked"
              type="radio"
              className="custom-control-input"
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">Polish</span>
          </label>
        </div>
      </form>
    );
  }
}

Step3.propTypes = {};

export default Step3;
