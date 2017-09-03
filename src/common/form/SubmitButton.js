import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DoneAll from 'material-ui/svg-icons/action/done-all';

const SubmitButton = props => {
  return (
    <RaisedButton
      className={props.className}
      label="OK"
      type="submit"
      primary={true}
      disabled={props.disabled}
      icon={<DoneAll />}
    />
  );
};

export default SubmitButton;
