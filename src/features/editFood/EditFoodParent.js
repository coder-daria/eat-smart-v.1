import React from 'react';
import EditFoodSearch from './EditFoodSearch'
import EditFoodChanges from './EditFoodChanges';
import R from 'ramda';

class EditFoodParent extends React.Component {
  state = {
    foodToEdit: null
  }
  onSelect = (foodToEdit) => {
    this.setState({
      foodToEdit: foodToEdit
    })
  }
  render() {
    const editFoodChanges = this.state.foodToEdit ? <EditFoodChanges selected={R.clone(this.state.foodToEdit)} onSubmit={this.props.onSubmit}/> : <p>Choose a food</p>;
    return (
      <div>
        <EditFoodSearch {...this.props} onSelect={this.onSelect}/>
          {editFoodChanges} 
      </div>
    )
  }
}

export default EditFoodParent;