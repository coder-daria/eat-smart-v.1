import React from 'react';
import Autocomplete from 'react-autocomplete';

class Meal extends React.Component {
    state = {
        mealName: ""
    }
    handleChange = (event) => {
        this.setState({ mealName: event.target.value })
    }
    showItem = (item, value) => {
        return (
            item.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
    }
    render() {
        let array = this.props.list;
        let food = array.map((item) => {
            return (
                <div>
                    <li>{item.name}</li>
                    <button onClick={() => this.props.onClick(item.name)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h3>Add meal</h3>
                <Autocomplete
                    getItemValue={(item) => item}
                    items={this.props.predefinedMealsNames}
                    renderItem={(item, isHighlighted) =>
                        <div>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item}
                            </div>
                        </div>
                    }
                    value={this.state.mealName}
                    onChange={(e) => {
                        this.setState({
                            mealName: e.target.value
                        });
                    }}
                    onSelect={(val, item) => {
                        {/*this.props.onSelect(item);*/ }

                    }}
                    shouldItemRender={this.showItem}
                />
                <ul>
                    {food}
                </ul>
                <button type="button" onClick={() => {
                    this.props.addMeal(this.props.list, this.state.mealName);
                    this.setState({ mealName: "" })
                }
                }
                    disabled={!this.state.mealName}>Save meal</button>
            </div>
        )
    }
}

export default Meal;