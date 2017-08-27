import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';

const ButtonWithHistory = withRouter(({ history }) =>
  <ReturnButton history={history} />
);

const ReturnButton = props => {
  const goToAddMeal = () => props.history.push('/addMeal');
  return (
    <div>
      <RaisedButton
        label="Return"
        type="button"
        secondary={true}
        onClick={goToAddMeal}
      />
    </div>
  );
};

export default ButtonWithHistory;
