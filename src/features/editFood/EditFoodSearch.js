import React from 'react';
import EditFoodChanges from './EditFoodChanges';
import AutoComplete from '../../common/AutoComplete';

class EditFoodSearch extends React.Component {
  render() {
    let picture = (item) => {
      if (item.properties && item.properties.url) {
        return <img alt={item.name} src={item.properties.url} width="200" height="100" />
      }
    }
    return (
      <div>
        Search
        <AutoComplete
          items={this.props.foods}
          onSelect={(val, food) => {
            this.props.onSelect(food)
          }}
        />
      </div>
    )
  }
}

export default EditFoodSearch;