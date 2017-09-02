import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import Return from 'material-ui/svg-icons/hardware/keyboard-return';
import './returnButton.css';
import { connect } from 'react-redux';
import { changeLocation } from '../../Actions';

const ReturnButton = props => {
  const goToAddMeal = () => {
    props.history.push('/addMeal');
    props.onSelect('/addMeal');
  };
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

const mapDispatchToProps = dispatch => {
  return {
    onSelect: location => dispatch(changeLocation(location))
  };
};

const ReturnButtonContainer = withRouter(ReturnButton);

export default connect(null, mapDispatchToProps)(ReturnButtonContainer);
