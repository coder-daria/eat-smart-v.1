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

  handleName = (searchText, dataSource, params) => {
    this.setState(prevState => {
      const foodBeingChanged = prevState.foodBeingChanged;
      foodBeingChanged.name = searchText;
      return { foodBeingChanged: foodBeingChanged }
    });
  }
  // handleName = event => {
  // const value = event.target.value;
  // this.setState(prevState => {
  //   const foodBeingChanged = prevState.foodBeingChanged;
  //   foodBeingChanged.name = value;
  //   return { foodBeingChanged: foodBeingChanged }
  // });
  //  handleInGeneral = type => event => {
  //     const value = event.target.value;
  //     this.setState(prevState => {
  //       const foodBeingChanged = prevState.foodBeingChanged;
  //       foodBeingChanged.properties[type] = value;
  //       return { foodBeingChanged: foodBeingChanged }
  //     });
  //   }
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
            <TextField hintText="Name" onChange={this.handleName} value={foodToEdit.name} /><br />
          </label>
          <br />
          <label>
            Fat <br />
            <TextField hintText="Fat" onChange={this.handleInGeneral1("fat")} value={foodToEdit.properties.fat} /><br />
          </label>
          <br />
          <label>
            Protein<br />
            <TextField hintText="Protein" onChange={this.handleInGeneral1("protein")} value={foodToEdit.properties.protein} /><br />
          </label>
          <br />
          <label>
            Carbs<br />
            <TextField hintText="Carbs" onChange={this.handleInGeneral1("carbs")} value={foodToEdit.properties.carbs} /><br />
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