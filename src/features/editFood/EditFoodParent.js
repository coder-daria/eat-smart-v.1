import React from 'react';
import EditFoodSearch from './EditFoodSearch'
import EditFoodChanges from './EditFoodChanges';

class EditFoodParent extends React.Component {

  render() {
    const editFoodChanges = this.props.selected? <EditFoodChanges {...this.props}/> : <p>Choose a food</p>;
    return (
      <div>
        <EditFoodSearch {...this.props}/>
         {editFoodChanges}
      </div>
    )
  }
}

export default EditFoodParent;