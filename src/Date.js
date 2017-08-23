import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan600 } from 'material-ui/styles/colors';
import moment from 'moment';
import './date.css';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullDateDisplay: this.today(),
            currentMonth: moment().month()
        }
    }
    handleChange = (event, date) => {
        let choosenDay = moment(date).format('DD MMMM YYYY');
        this.setState({
            fullDateDisplay: choosenDay
        })

        let previous = this.state.currentMonth;
        let current = moment(date).month();

        if (previous !== current) {
            console.dir("New month!!");
            this.setState({
                currentMonth: moment(date).month()
            });
        }
    }

    today = () => {
        let today = moment().format('DD MMMM YYYY');
        return today;
    }
    render() {
        let datePicker;
        const calendarIcon = <IconButton type="submit" onTouchTap={() => datePicker.focus()} ><FontIcon className="material-icons" color={cyan600}>date_range</FontIcon></IconButton>;
        return (
            <div className="dateContainer">
                {calendarIcon}
                <DatePicker
                    autoOk={true}
                    hintText={this.state.fullDateDisplay}
                    onChange={this.handleChange}
                    ref={c => datePicker = c}
                    formatDate={(date)=> moment(date).format('DD MMMM YYYY')}
                />
            </div>
        )
    }
}

export default Date;
