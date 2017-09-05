import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan600 } from 'material-ui/styles/colors';
import moment from 'moment';
import './dayPicker.css';

class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDateDisplay: 'Choose a date'
    };
  }
  handleChange = (event, date) => {
    this.setState({
      fullDateDisplay: this.formatDate(date)
    });

    this.props.onSelect(moment(date));
  };
  formatDate = date => {
    return moment(date).format('DD MMMM YYYY');
  };
  render() {
    let datePicker;
    const calendarIcon = (
      <IconButton type="submit" onTouchTap={() => datePicker.focus()}>
        <FontIcon className="material-icons" color={cyan600}>
          date_range
        </FontIcon>
      </IconButton>
    );
    return (
      <div className="dateContainer">
        <div className="iconAndDateContainer">
          <div className="calendarIcon">{calendarIcon}</div>
          <div style={{ visibility: 'initial' }} className="datePicker">
            <button>
              <DatePicker
                autoOk={true}
                defaultDate={this.props.date}
                hintText={this.state.fullDateDisplay}
                onChange={this.handleChange}
                ref={c => (datePicker = c)}
                formatDate={this.formatDate}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DayPicker;
