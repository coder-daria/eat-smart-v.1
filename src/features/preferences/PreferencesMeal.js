import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
// import { blue300, indigo900 } from 'material-ui/styles/colors';

class PreferencesMeal extends React.Component {
  handleRequestDelete = (key) => {
   this.props.removePreference(key);
  };
  render() {
    let mealsPreferences = this.props.mealsPreferences;
    let preferencesArray = mealsPreferences.map((preference) => {
      let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000;
      let formatedTime = moment(chosenUnixTimestamp).format("HH:mm"); 
      return (
        <li>
          <br/>
         <Chip
          key={preference.name}
          onRequestDelete={() => this.handleRequestDelete(preference.name)}
        >
        {preference.name} at {formatedTime}
      </Chip>
        </li>
      )
    })

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