import React from 'react';
import EditFoodSearch from './EditFoodSearch'
import EditFoodChanges from './EditFoodChanges';

class EditFoodParent extends React.Component {
  render() {
    return (
      <div>
        <EditFoodSearch {...this.props}/>
         <EditFoodChanges {...this.props}/> 
      </div>
    )
  }
}

export default EditFoodParent;