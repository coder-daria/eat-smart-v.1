import React from 'react';
import moment from 'moment';

class PreferencesMeal extends React.Component {
  render() {

    let mealsPreferences = this.props.mealsPreferences;
    let preferencesArray = mealsPreferences.map((preference) => {
    let chosenUnixTimestamp = (moment(preference.seconds).unix()) * 1000; // seconds
    // console.log(chosenUnixTimestamp);
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

export default PreferencesMeal;