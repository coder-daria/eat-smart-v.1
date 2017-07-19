import React from 'react';

class EditFoodChanges extends React.Component {
  state = {
    name: "",
    fat: 0,
    protein: 0,
    carbs: 0
  }
  handleInGeneral = type => event => {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleFocus = () => {
    document.getElementsByTagName("input").value = "";
  }
  render() {
    let selected = this.props.selected; //id
    let foods = this.props.foods; //aray
    let selectedFood = {}

    for (let i = 0; i < foods.length; i++) {
      for (let key in foods[i]) {
        if (foods[i][key] === foods[i][selected]) {
          selectedFood = foods[i];
        }
      }
    }
    // console.log(this.props.foods);
    console.log(selectedFood);
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <label>
            Name<br />
            <input onChange={this.handleInGeneral("name")}
              onFocus={this.handleFocus}
              type="text" name="name" value={this.state.name} />
          </label>
          <br />
          <label>
            Fat <br />
            <input onChange={this.handleInGeneral("fat")}
              type="text" name="fat" value={this.state.fat} />
          </label>
          <br />
          <label>
            Protein<br />
            <input onChange={this.handleInGeneral("protein")}
              type="text" name="protein" value={this.state.protein} />
          </label>
          <br />
          <label>
            Carbs<br />
            <input onChange={this.handleInGeneral("carbs")}
              type="text" name="carbs" value={this.state.carbs} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditFoodChanges;