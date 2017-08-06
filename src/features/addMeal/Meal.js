import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

class Meal extends React.Component {
    state = {
        name: "",
        quantities: [],
        allQuantitiesFulfilled: false,
    }

    onChange = name => {
        this.setState({
            name: name
        });
    }

    isValidQuantity(q) {
        return !isNaN(q) && q > 0;
    }
    
    validateQuantities(quantitiesArray) {
        function allTrue(x, y) {
            return x && y;
        }
        return quantitiesArray.map(this.isValidQuantity).reduce(allTrue, true);
    }

    styleForQuantity(quantity) {
        if (!this.isValidQuantity(quantity)) {
            return { backgroundColor: "red" };
        } else {
            return { backgroundColor: "white" };

        }
    }
    render() {
        let arrayOfId = this.props.foodsBeingAddedToNewMeal;
        let food = arrayOfId.map((object, index) => {
            return (
                <div>
                    <li>{this.props.foods[object.id].name}</li>
                    <input type="text" size="1" onChange={
                        (e) => {
                            object.quantity = Number(e.target.value);
                            object.unit = "grams";

                            {/* let quantitiesValid = this.state.quantities[index] */}
                            this.setState(oldState => {
                                oldState.quantities[index] = object.quantity;
                                const allQuantitiesFulfilled = this.validateQuantities(oldState.quantities);
                                return { 
                                    quantities: oldState.quantities, 
                                    allQuantitiesFulfilled 
                                    };
                            })
                        }
                    } style={this.styleForQuantity(this.state.quantities[index])} />

                    grams<br />
                    <button onClick={() => {
                        this.props.removeFromMeal(object.id);
                    }}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h2>Meal name:</h2>
                <AutoComplete
                    items={this.props.mealsPreferences}
                    onSelect={(mealName) => this.setState({ name: mealName })}
                    onChange={this.onChange}
                />
                <ul>
                    {food}
                </ul>
                <button type="button" onClick={() => {
                    this.props.addMeal(this.props.foodsBeingAddedToNewMeal, this.state.name);
                    this.setState({ name: "" });
                }
                }
                    disabled={!this.state.name || !this.state.allQuantitiesFulfilled}>Save meal</button>
            </div>
        )
    }
}

Meal.propTypes = {
    foodsBeingAddedToNewMeal: PropTypes.array.isRequired,
    foods: PropTypes.object.isRequired,
    removeFromMeal: PropTypes.func.isRequired,
    addMeal: PropTypes.func.isRequired,
    mealsPreferences: PropTypes.array,


};

export default Meal;