import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import RaisedButton from 'material-ui/RaisedButton';

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
        const button = <RaisedButton label="Calendar" type="submit" primary={true} onTouchTap={() => datePicker.focus()} />;
        return (
            <div>
                {button}
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
