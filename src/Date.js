import React from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';

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
                <DatePicker
                    hintText="Choose date"
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Date;
