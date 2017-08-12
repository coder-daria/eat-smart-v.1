import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

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

  handleName = (searchText,dataSource, params) => {
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
  handleInGeneral1 = type => (searchText,dataSource, params) => {
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
    const buttonStyles = {
      backgroundColor: "rgb(0, 188, 212)",
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name<br />
            <AutoComplete hintText="Name" dataSource={this.state.dataSource} onUpdateInput={this.handleName} searchText={foodToEdit.name}/><br />
          </label>
          <br />
          <label>
            Fat <br />
             <AutoComplete hintText="Fat" dataSource={this.state.dataSource} onUpdateInput={this.handleInGeneral1("fat")} searchText={foodToEdit.properties.fat}/><br />
          </label>
          <br />
          <label>
            Protein<br />
            <AutoComplete hintText="Protein" dataSource={this.state.dataSource} onUpdateInput={this.handleInGeneral1("protein")} searchText={foodToEdit.properties.protein}/><br />
          </label>
          <br />
          <label>
            Carbs<br />
            <AutoComplete hintText="Carbs" dataSource={this.state.dataSource} onUpdateInput={this.handleInGeneral1("carbs")} searchText={foodToEdit.properties.carbs}/><br />
          </label>
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