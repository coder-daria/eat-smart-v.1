import React from 'react';
import PropTypes from 'prop-types';

class Step2 extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label className="form-control-label" for="formGroupExampleInput2">
            What is your daily calories limit?
          </label>
          <input
            type="text"
            className="form-control w-25 p-2"
            id="formGroupExampleInput2"
            placeholder="Enter number of calories"
          />
        </div>
      </form>
    );
  }
}

Step2.propTypes = {};

export default Step2;
