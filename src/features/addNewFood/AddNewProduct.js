import React from 'react';

class AddNewProduct extends React.Component {
    state = {
        name: "",
        fat: 0,
        protein: 0,
        carbs: 0
    }
    handleInGeneral = type => event => {
        this.setState({[type]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const loading = this.props.isLoading ? <p>loading</p> : null;
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                    <label>
                        Name<br/>
                        <input onChange={this.handleInGeneral("name")} type="text" name="name" />
                    </label>
                    <br />
                    <label>
                        Fat <br/>
                        <input onChange={this.handleInGeneral("fat")} type="text" name="fat" />
                    </label>
                    <br />
                    <label>
                        Protein<br/>
                        <input onChange={this.handleInGeneral("protein")} type="text" name="protein" />
                    </label>
                    <br />
                    <label>
                        Carbs<br/>
                        <input onChange={this.handleInGeneral("carbs")} type="text" name="carbs" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {loading}
            </div>
        )
    }
}

export default AddNewProduct;