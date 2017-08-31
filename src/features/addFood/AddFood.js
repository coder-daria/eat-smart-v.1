import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/form/FormFields';
import { stringToNumber } from '../../common/form/normalizers';
import ReturnButton from '../../common/form/ReturnButton';
import './addFood.css';

const AddFood = props => {
  const clearAndSubmit = values => {
    props.onSubmit(values);
    props.reset();
  };

  const { invalid, handleSubmit } = props;
  const submit = handleSubmit(clearAndSubmit);
  return (
    <div className="addFoodContainer">
      <div>
        <form onSubmit={submit} className="addFoodFormContainer">
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
          <div className="addFoodButtons">
            <div>
              <RaisedButton
                className="addFoodSubmitButton"
                label="Submit"
                type="submit"
                primary={true}
                disabled={invalid}
              />
            </div>
            <div className="addFoodReturnButton">
              <ReturnButton />
            </div>
          </div>
        </form>
      </div>
      <div className="addFoodImg">
        <img
          alt="img"
          width="300px"
          height="220px"
          src="http://www.szczyptasoli.pl/wp-content/uploads/2016/03/pizza_cheat-1170x770.jpg"
        />
      </div>
    </div>
  );
};
AddFood.propTypes = {
  isLoading: PropTypes.bool
};

export default AddFood;
