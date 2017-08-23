import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import './editFoodSearch.css';

class EditFoodSearch extends React.Component {
  state = {
    idOfSelectedFood: null
  }
  componentWillReceiveProps(newProps) {
    if (this.props.foods !== newProps.foods) {
      newProps.onSelect(newProps.foods.filter(f => f.id === this.state.idOfSelectedFood)[0]);
    }
  }
  render() {
    return (
      <div className="editFoodSearchContainer">
        <AutoComplete
          items={this.props.foods}
          onSelect={(val, food) => {
            this.setState({ idOfSelectedFood: food.id });
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