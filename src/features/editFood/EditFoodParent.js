import React from 'react';
import EditFoodSearch from './EditFoodSearch'
import EditFoodChanges from './EditFoodChanges';
import R from 'ramda';
import PropTypes from 'prop-types';

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
      <div className="MainContainer">
        <EditFoodSearch {...this.props} onSelect={this.onSelect}/>
          {editFoodChanges} 
      </div>
    )
  }
}

EditFoodParent.propTypes = {
    onSubmit: PropTypes.func,
};


export default EditFoodParent;