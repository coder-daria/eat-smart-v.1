import React from 'react';
import PropTypes from 'prop-types';
import { renderTextField, renderFieldArray } from '../../common/FormFields';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, FieldArray } from 'redux-form';
import './preferencesParent.css';

class PreferencesParent extends React.Component {

  render() {
    const disabled = this.props.invalid || this.props.pristine;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} className="preferencesContainer">
          <Field name="kcal" type="text" component={renderTextField} label="Kcal" />
          <FieldArray name="meals" component={renderFieldArray} />
          <RaisedButton label="Save" type="submit" primary={true} disabled={disabled} />
        </form>
      </div>
    )
  }
}

export default PreferencesParent;
