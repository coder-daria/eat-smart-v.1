import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';

class PreferencesKcal extends React.Component {
    state = {
        kcal: 0,
        dataSource: []
    }
    handleKcal = (value) => {
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
                <AutoComplete hintText="Kcal" dataSource={this.state.dataSource} onUpdateInput={this.handleKcal} /><br />
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