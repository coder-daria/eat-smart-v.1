import React from 'react';
import EditFoodSearch from './EditFoodSearch'
import EditFoodChanges from './EditFoodChanges';
import R from 'ramda';
import PropTypes from 'prop-types';
import './editFoodParent.css';

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
    const editFoodChanges = this.state.foodToEdit ? <EditFoodChanges initialValues={R.clone(this.state.foodToEdit)} selected={R.clone(this.state.foodToEdit)} onSubmit={this.props.onSubmit}/> : <p>Choose a food</p>;
    return (
      <div className="editFoodParentContainer">
        <div className="search">
        <EditFoodSearch {...this.props} onSelect={this.onSelect}/>
        </div>
        <div className="food">
         {editFoodChanges} 
        </div>
        <div className="img">
         <img alt="img" src="http://del.h-cdn.co/assets/16/17/980x653/gallery-1461593822-delish-mexican-chicken-pasta-1.jpg" />
        </div>
      </div>
    )
  }
}

EditFoodParent.propTypes = {
    onSubmit: PropTypes.func,
};


export default EditFoodParent;