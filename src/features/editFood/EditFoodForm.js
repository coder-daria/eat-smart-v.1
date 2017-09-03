import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../common/form/FormFields';
import AutoComplete from '../../common/AutoComplete';
import ReturnButton from '../../common/form/ReturnButton';
import './editFoodForm.css';
import R from 'ramda';
import SubmitButton from '../../common/form/SubmitButton';

const validate = values => {
  const errors = {};
  if (!values.selected) {
    return errors;
  }
  errors.selected = {};
  if (!values.selected.name) {
    errors.selected.name = 'Required';
  } else if (values.selected.name.length < 2) {
    errors.selected.name = 'Chosen name is too short';
  }
  if (!values.selected.fat) {
    errors.selected.fat = 'Required';
  }
  if (!values.selected.protein) {
    errors.selected.protein = 'Required';
  }
  if (!values.selected.carbs) {
    errors.selected.carbs = 'Required';
  }
  if (R.isEmpty(errors.selected)) {
    return {};
  } else {
    return errors;
  }
};

const EditFoodForm = props => {
  const clearAndSubmit = values => {
    props.onSubmit(values.selected);
    props.reset();
  };

  const renderEditFood = () => {
    return (
      <div className="editFoodFormContainer">
        <div className="fieldsContainer">
          <div>
            <Field
              className="editFoodField"
              name="selected.name"
              type="text"
              component={renderTextField}
              label="Name"
              readOnly="true"
            />
          </div>
          <div>
            <Field
              className="editFoodField"
              name="selected.fat"
              type="number"
              component={renderTextField}
              label="Fat"
            />
          </div>
          <div>
            <Field
              className="editFoodField"
              name="selected.protein"
              type="number"
              component={renderTextField}
              label="Protein"
            />
          </div>
          <div>
            <Field
              className="editFoodField"
              name="selected.carbs"
              type="number"
              component={renderTextField}
              label="Carbs"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderAutoComplete = field => {
    return (
      <div>
        <AutoComplete
          items={props.foods}
          onSelect={(name, food) => field.input.onChange(food)}
        />
      </div>
    );
  };

  const renderButtons = disabledSubmit => (
    <div className="editFoodButtons">
      <SubmitButton
        disabled={disabledSubmit}
        className="editFoodRaisedButton"
      />
      <ReturnButton />
    </div>
  );

  const submit = props.handleSubmit(clearAndSubmit);
  const editFood = props.isSelected ? renderEditFood() : null;
  const disabledSubmit = props.invalid || props.pristine;
  const buttons = renderButtons(disabledSubmit);

  return (
    <form onSubmit={submit} className="editFoodAndImgContainer">
      <div className="searchAndFormContainer">
        <div className="search">
          <Field
            name="selected"
            component={renderAutoComplete}
            label="Select food"
          />
        </div>
        <div>{editFood}</div>
      </div>
      <div className="imgAndButtonsContainer">
        <div className="img">
          <img
            alt="img"
            width="250px"
            height="200px"
            src="http://usercontent.s3.amazonaws.com/editorial/wp-content/uploads/2010/12/healthy-food-for-pregnancy-page.jpg"
          />
        </div>
        <div className="editFoodButtonsContainer">{buttons}</div>
      </div>
    </form>
  );
};

EditFoodForm.propTypes = {
  onSubmit: PropTypes.func,
  foods: PropTypes.array
};

export default reduxForm({
  form: 'EditFoodForm',
  enableReinitialize: true,
  validate
})(EditFoodForm);
