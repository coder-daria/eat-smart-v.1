import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class PreferencesMeal extends React.Component {
  render() {
    let mealsPreferences = this.props.mealsPreferences;
    let preferencesArray = mealsPreferences.map((preference) => {
      let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000;
      let formatedTime = moment(chosenUnixTimestamp).format("HH:mm");
      return (
        <li>
          <h3>{preference.name}</h3>
          <h3>{formatedTime}</h3>
          <br />
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