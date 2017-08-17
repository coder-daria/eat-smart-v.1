import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class PreferencesKcal extends React.Component {
    state = {
        kcal: 0,
    }
    handleKcal = (event, value) => {
        this.setState({
            kcal: value
        })
    }
    handleSave = event => {
        event.preventDefault();
        this.props.addKcal(this.state.kcal);
    }
    render() {
        return (
            <form onSubmit={this.handleSave}>
                <TextField hintText="Daily kcal" type="number" onChange={this.handleKcal} /><br />
                <RaisedButton label="Save" type="submit" primary={true} />
            </form>
        )
    }
}

PreferencesKcal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onUpdateInput: PropTypes.func.isRequired,
    dataSource: PropTypes.array.isRequired
};

export default PreferencesKcal;