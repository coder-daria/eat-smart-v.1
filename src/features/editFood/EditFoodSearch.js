import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

class EditFoodSearch extends React.Component {
  state = {
    idOfFoodSelected: null
  }
  componentWillReceiveProps(newProps) {
    if (this.props.foods !== newProps.foods) {
      newProps.onSelect(newProps.foods.filter(f => f.properties.id === this.state.idOfFoodSelected)[0]);
    }
  }
  render() {
    // let picture = (item) => {
    //   if (item.properties && item.properties.url) {
    //     return <img alt={item.name} src={item.properties.url} width="200" height="100" />
    //   }
    // }                   
    return (
      <div className="MainContainer">
        Search
        <AutoComplete
          items={this.props.foods}
          onSelect={(val, food) => {
            this.setState({ idOfFoodSelected: food.properties.id });
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