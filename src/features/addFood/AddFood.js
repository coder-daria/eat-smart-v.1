import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/form/FormFields';
import { stringToNumber } from '../../common/form/normalizers';
import ReturnButton from '../../common/form/ReturnButton';
import './addFood.css';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import MaterialIcon from '../../common/MaterialIcon';

import SubmitButton from '../../common/form/SubmitButton';

const AddFood = props => {
  const clearAndSubmit = values => {
    props.onSubmit(values);
    props.reset();
  };

  const { invalid, handleSubmit } = props;
  const submit = handleSubmit(clearAndSubmit);

  const renderAddFood = () => {
    return (
      <div className="addFoodFieldsContainer">
        <div>
          <Field
            className="addFoodField"
            name="name"
            type="text"
            component={renderTextField}
            label="Name"
          />
        </div>
        <div>
          <Field
            className="addFoodField"
            name="fat"
            type="number"
            component={renderTextField}
            label="Fat"
            normalize={stringToNumber}
          />
        </div>
        <div>
          <Field
            className="addFoodField"
            name="protein"
            type="number"
            component={renderTextField}
            label="Protein"
          />
        </div>
        <div>
          <Field
            className="addFoodField"
            name="carbs"
            type="number"
            component={renderTextField}
            label="Carbs"
          />
        </div>
      </div>
    );
  };
  return (
    <form onSubmit={submit} className="addFoodContainer">
      <div className="renderAddFoodContainer">
        <div>{renderAddFood()}</div>
      </div>
      <div className="addFoodimgAndButtonsContainer">
        <div>
          <img
            alt="img"
            width="250px"
            height="200px"
            src="http://www.szczyptasoli.pl/wp-content/uploads/2016/03/pizza_cheat-1170x770.jpg"
          />
        </div>
        <div className="addFoodButtons">
          <SubmitButton className="addFoodSubmitButton" />
          <ReturnButton />
        </div>
      </div>
    </form>
  );
};
AddFood.propTypes = {
  isLoading: PropTypes.bool
};

export default AddFood;
