import React from 'react';
import PropTypes from 'prop-types';

class Step1 extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label className="form-control-label" for="formGroupExampleInput2">
            Nickname
          </label>
          <input
            type="text"
            className="form-control w-25 p-2"
            id="formGroupExampleInput2"
            placeholder="Enter your nickname"
          />
        </div>
        <div className="form-group">
          <label className="form-control-label" for="formGroupExampleInput">
            Name
          </label>
          <input
            type="text"
            className="form-control w-25 p-2"
            id="formGroupExampleInput"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label className="form-control-label" for="formGroupExampleInput2">
            Surname
          </label>
          <input
            type="text"
            className="form-control w-25 p-2"
            id="formGroupExampleInput2"
            placeholder="Enter your surname"
          />
        </div>
      </form>
    );
  }
}

Step1.propTypes = {};

export default Step1;
