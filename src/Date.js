import React from 'react';
import DatePicker from 'react-datepicker';
import DatePickerr from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            controlledDate: null,
        }
    }
    handleChange = (event, date) => {
        this.setState({
            controlledDate: date,
        });
    }
    render() {
        return (
            <div>
                <DatePickerr
                    hintText="Choose date"
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Date;
