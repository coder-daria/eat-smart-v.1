import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

class EditFoodSearch extends React.Component {
  render() {
    // let picture = (item) => {
    //   if (item.properties && item.properties.url) {
    //     return <img alt={item.name} src={item.properties.url} width="200" height="100" />
    //   }
    // }
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

EditFoodSearch.propTypes = {
    foods: PropTypes.array,
    onSelect: PropTypes.func,
}

export default EditFoodSearch;