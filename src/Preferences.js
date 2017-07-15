import React from 'react';
import PreferencesBox from './PreferencesBox';

class Preferences extends React.Component {
  state = {
    showPreferences: false
  }
  handlePreferences = () => {
    if (!this.state.showPreferences) {
      this.setState({
        showPreferences: true
      })
    }
    else {
        return (
          <li>
            <Preferences />
          </li>
        )
      }
  }
  render() {
    return (
      <div className='preferencesContainer'>
        <ul>
          <li>
            {this.state.showPreferences ? <PreferencesBox /> : null}
          </li>
        </ul>
        <button onClick={this.handlePreferences}>+</button>
      </div>
    )
  }
}

export default Preferences;