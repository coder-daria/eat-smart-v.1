import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import EditableChip from '../../common/EditableChip';
// import { blue300, indigo900 } from 'material-ui/styles/colors';

class PreferencesMeal extends React.Component {

  handleRequestDelete = (key) => {
    this.props.removePreference(key);
  };

  savePreference = preference => {
    console.log(`you have changed ${JSON.stringify(preference)}`);
  }

  render() {
    let mealsPreferences = this.props.mealsPreferences;
    let preferencesArray = mealsPreferences.map((preference, index) => {
      return (
        <li key={index}>
          <br/>
          <EditableChip onSave={this.savePreference} preference={preference} index={index}/>
        </li>
      )
    })

    // const content = this.state.editing? this.form() : this.chip();

    return (
      <ul>
        {preferencesArray}
      </ul>
    )
  }
}

PreferencesMeal.propTypes = {
  mealsPreferences: PropTypes.array.isRequired
};

export default PreferencesMeal;