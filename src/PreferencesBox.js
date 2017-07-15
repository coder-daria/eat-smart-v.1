import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

class PreferencesBox extends React.Component {
  state = {
    name: "",
  }
  mealName = () => {
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form className="preferencesContainer" onSubmit={this.handleSubmit}>
          Meal name :<input onChange={this.mealName} type="text" />
          Time: <br />
          <TimePicker defaultValue={moment()} showSecond={false} />
          <input type="submit" value="update" />
        </form>
      </div>
        )
  }
}

export default PreferencesBox;