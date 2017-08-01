import React from 'react';
import Autocomplete from 'react-autocomplete';

class Meal extends React.Component {
    state = {
        foodName: "",
        grams: []
    }

    // handleChange = (event) => {
    //     this.setState({ foodName: event.target.value })
    // }

    showItem = (item, value) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1;

    render() {
        let arrayOfId = this.props.foodsOfNewMeal;
        let food = arrayOfId.map((object) => {
            return (
                <div>
                    <li>{this.props.foods[object.id].name}</li>
                    <input type="text" size="1" onChange={
                        (e)=> {
                            object.quantity = e.target.value
                        }
                    }/> 
                    grams<br />
                    <button onClick={() => this.props.removeFromMeal(object.id)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h2>Meal name:</h2>
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
                    value={this.state.foodName}
                    onChange={e => {
                        this.setState({
                            foodName: e.target.value
                        });
                    }}
                    shouldItemRender={this.showItem}
                />
                <ul>
                    {food}
                </ul>
                <button type="button" onClick={() => {
                    this.props.addMeal(this.props.foodsOfNewMeal, this.state.foodName);
                     this.setState({ foodName: "" }); 
                }
                }
                    disabled={!this.state.foodName}>Save meal</button>
            </div>
        )
    }
}

export default Meal;