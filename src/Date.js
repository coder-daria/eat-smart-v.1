import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {cyan600} from 'material-ui/styles/colors';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullDate: null,
        }
    }
    handleChange = (event, date) => {
        this.setState({
            fullDate: date,
        });

        if (this.state.fullDate !== null) {
            let prevMonth = this.state.fullDate.getMonth();
            let currentMonth = date.getMonth();

            if (prevMonth !== currentMonth) {
                console.dir("New month!!");
            }
        }
    }
    today = () => {
        return "2017-08-12";
    }
    render() {

        let datePicker;
        const calendarIcon = <IconButton type="submit" onTouchTap={() => datePicker.focus()} ><FontIcon className="material-icons" color={cyan600}>date_range</FontIcon></IconButton>;
        // const button = <RaisedButton label={"Calendar"} type="submit" primary={true} onTouchTap={() => datePicker.focus()} />;
        return (
            <div>
                {calendarIcon}
                <DatePicker
                    hintText={this.today()}
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                    ref={c => datePicker = c}
                />
            </div>
        )
    }
}

export default Date;
