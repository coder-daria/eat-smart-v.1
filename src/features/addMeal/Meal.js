import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

class Meal extends React.Component {
    state = {
        name: ""
    }

    onChange = name => {
        this.setState({
            name: name
        });
    }

    render() {


        let arrayOfId = this.props.foodsBeingAddedToNewMeal;
        let food = arrayOfId.map((object) => {
            return (
                <div>
                    <li>{this.props.foods[object.id].name}</li>
                    <input type="text" size="1" onChange={
                        (e) => {
                            object.quantity = e.target.value,
                            object.unit = "grams"
                        }
                    } />
                    grams<br />
                    <button onClick={() => this.props.removeFromMeal(object.id)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h2>Meal name:</h2>
                <AutoComplete
                    items={this.props.mealsPreferences}
                    onSelect={(mealName) => this.setState({name: mealName})}
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
                    disabled={!this.state.name}>Save meal</button> 
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