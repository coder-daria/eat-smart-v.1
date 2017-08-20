import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

class EditFoodSearch extends React.Component {
  state = {
    idOfSelectedFood: null
  }
  componentWillReceiveProps(newProps) {
    if (this.props.foods !== newProps.foods) {
      newProps.onSelect(newProps.foods.filter(f => f.properties.id === this.state.idOfSelectedFood)[0]);
    }
  }
  render() {              
    return (
      <div>
        Search
        <AutoComplete
          items={this.props.foods}
          onSelect={(val, food) => {
            this.setState({ idOfSelectedFood: food.properties.id });
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