import React from 'react';
import PropTypes from 'prop-types';
import {
  renderTextField,
  renderFieldArray
} from '../../common/form/FormFields';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, FieldArray } from 'redux-form';
import './preferencesForm.css';
import ReturnButton from '../../common/form/ReturnButton';

class PreferencesParent extends React.Component {
  render() {
    const disabled = this.props.invalid || this.props.pristine;
    return (
      <div className="preferencesContainer">
        <form onSubmit={this.props.handleSubmit}>
          <div className="preferencesKcalContainer">
            <Field
              name="kcal"
              type="number"
              component={renderTextField}
              label="Kcal"
            />
          </div>
          <div>
            <FieldArray name="meals" component={renderFieldArray} />
          </div>
          <div className="preferencesButtons">
            <div>
              <RaisedButton
                label="Save"
                type="submit"
                primary={true}
                disabled={disabled}
              />
            </div>
            <div>
              <ReturnButton className="returnButton" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PreferencesParent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default PreferencesParent;
