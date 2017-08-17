import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditFoodChanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBeingChanged: this.props.selected,
      dataSource: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ foodBeingChanged: nextProps.selected });
  }

  handleName = (event, searchText) => {
    this.setState(prevState => {
      const foodBeingChanged = prevState.foodBeingChanged;
      foodBeingChanged.name = searchText;
      return { foodBeingChanged: foodBeingChanged }
    });
  }
  handleInGeneral1 = type => (event, searchText) => {
    this.setState(prevState => {
      const foodBeingChanged = prevState.foodBeingChanged;
      foodBeingChanged.properties[type] = searchText;
      return { foodBeingChanged: foodBeingChanged }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.foodBeingChanged);
  }

  render() {
    const foodToEdit = this.state.foodBeingChanged;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name<br />
            <TextField hintText="Name" onChange={this.handleName} value={foodToEdit.name} type="text"/><br />
          </label>
          <br />
          <label>
            Fat <br />
            <TextField hintText="Fat" onChange={this.handleInGeneral1("fat")} value={foodToEdit.properties.fat} type="number"/><br />
          </label>
          <br />
          <label>
            Protein<br />
            <TextField hintText="Protein" onChange={this.handleInGeneral1("protein")} value={foodToEdit.properties.protein} type="number"/><br />
          </label>
          <br />
          <label>
            Carbs<br />
            <TextField hintText="Carbs" onChange={this.handleInGeneral1("carbs")} value={foodToEdit.properties.carbs} type="number"/><br />
          </label>
          <RaisedButton label="Submit" type="submit" primary={true} />
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