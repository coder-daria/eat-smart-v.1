import React from 'react';
import Autocomplete from 'react-autocomplete';
import EditFoodChanges from './EditFoodChanges';

class EditFoodSearch extends React.Component {
  state = {
    input: "",
    selectedFood: {}
  }

  showItem = (item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  render() {
    let picture = (item) => {
      if (item.properties && item.properties.url) {
        return <img alt={item.name} src={item.properties.url} width="200" height="100" />
      }
    }
    return (
      <div className="SearchBox">
        <Autocomplete
          getItemValue={(item) => item.name}
          items={this.props.foods}
          renderItem={(item, isHighlighted) =>
            <div>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
              {picture(item)}
            </div>
          }
          value={this.state.input}
          onChange={(e) => {
            this.setState({
              input: e.target.value
            });
          }}
          onSelect={(val, food) => {
            this.props.onSelect(food);
            this.setState({
              input: "",
              selectedFood: food
            })
          }}
          shouldItemRender={this.showItem}
        />
      </div>
    )
  }
}

export default EditFoodSearch;