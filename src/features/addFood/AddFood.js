import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

class AddFood extends React.Component {
    state = {
        name: "",
        fat: 0,
        protein: 0,
        carbs: 0,
        completed: 0
    }
    handleInGeneral = type => event => {
        this.setState({ [type]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const loading = this.props.isLoading ? <CircularProgress /> : null;
        return (
            <div className="MainContainer">
                <form onSubmit={this.handleSubmit} className="MainContainer">
                    <label>
                        Name<br />
                        <input onChange={this.handleInGeneral("name")} type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Fat <br />
                        <input onChange={this.handleInGeneral("fat")} type="text" name="fat" />
                    </label>
                    <br />
                    <label>
                        Protein<br />
                        <input onChange={this.handleInGeneral("protein")} type="text" name="protein" />
                    </label>
                    <br />
                    <label>
                        Carbs<br />
                        <input onChange={this.handleInGeneral("carbs")} type="text" name="carbs" />
                    </label>
                    <input type="submit" value="Submit" />
                    {loading}
                </form><br />
            </div>
        )
    }
}

AddFood.propTypes = {
    isLoading: PropTypes.bool,
};

export default AddFood;