import React from 'react';
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

        console.log("Hola!!");
    }
    today = () => {
        return "2017-08-12";
    }
    render() {
        return (
            <div>
                <DatePicker
                    hintText={this.today()}
                    value={this.state.controlledDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Date;
