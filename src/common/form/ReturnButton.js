import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import Return from 'material-ui/svg-icons/hardware/keyboard-return';
import './returnButton.css';

const ButtonWithHistory = withRouter(({ history }) =>
  <ReturnButton history={history} />
);

const ReturnButton = props => {
  const goToAddMeal = () => props.history.push('/addMeal');
  return (
    <div className="returnButton">
      <RaisedButton
        label="Return"
        type="button"
        secondary={true}
        onClick={goToAddMeal}
        icon={<Return />}
      />
    </div>
  );
};

export default ButtonWithHistory;
