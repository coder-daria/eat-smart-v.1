import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class EditFoodChanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBeingChanged: this.props.selected
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ foodBeingChanged: nextProps.selected });
  }

  handleName = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const foodBeingChanged = prevState.foodBeingChanged;
      foodBeingChanged.name = value;
      return { foodBeingChanged: foodBeingChanged }
    });
  }

  handleInGeneral = type => event => {
    const value = event.target.value;
    this.setState(prevState => {
      const foodBeingChanged = prevState.foodBeingChanged;
      foodBeingChanged.properties[type] = value;
      return { foodBeingChanged: foodBeingChanged }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.foodBeingChanged);
  }

  render() {
    const foodToEdit = this.state.foodBeingChanged;
    const buttonStyles = {
      backgroundColor: "rgb(0, 188, 212)",
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="MainContainer">
          <label>
            Name<br />
            <input onChange={this.handleName}
              type="text" name="name" value={foodToEdit.name} />
          </label>
          <br />
          <label>
            Fat <br />
            <input onChange={this.handleInGeneral("fat")}
              type="text" name="fat" value={foodToEdit.properties.fat} />
          </label>
          <br />
          <label>
            Protein<br />
            <input onChange={this.handleInGeneral("protein")}
              type="text" name="protein" value={foodToEdit.properties.protein} />
          </label>
          <br />
          <label>
            Carbs<br />
            <input onChange={this.handleInGeneral("carbs")}
              type="text" name="carbs" value={foodToEdit.properties.carbs} />
          </label>
           {/* <input type="submit" value="Submit" />  */}
           <RaisedButton label="Submit" type="submit" buttonStyle={buttonStyles} labelColor="white" /> 
        </form>
      </div>
    )
  }
}

EditFoodChanges.propTypes = {
    onSubmit: PropTypes.func,
    selected: PropTypes.object
};

export default EditFoodChanges;