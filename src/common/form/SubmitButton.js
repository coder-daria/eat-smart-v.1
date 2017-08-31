import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import MaterialIcon from '../../common/MaterialIcon';

const SubmitButton = props => {
  const { invalid, disabled } = props;
  return (
    <RaisedButton
      className={props.className}
      label="OK"
      type="submit"
      primary={true}
      disabled={disabled}
      icon={<DoneAll />}
    />
  );
};

export default SubmitButton;
