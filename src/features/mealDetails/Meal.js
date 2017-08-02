import React from 'react';
import AutoComplete from '../../common/AutoComplete';


class Meal extends React.Component {
    state = {
        name: ""
    }

    onChange = name => {
        this.setState({
            name: name
        });
    }

    onSelect = () => {
        console.log('something selected')
        const a = 5 + 5;
    }

    render() {


        let arrayOfId = this.props.foodsOfNewMeal;
        let food = arrayOfId.map((object) => {
            return (
                <div>
                    <li>{this.props.foods[object.id].name}</li>
                    <input type="text" size="1" onChange={
                        (e) => {
                            object.quantity = e.target.value
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
                    debugger
                    this.props.addMeal(this.props.foodsOfNewMeal, this.state.name);
                    this.setState({ name: "" });
                }
                }
                    disabled={!this.state.name}>Save meal</button> 
            </div>
        )
    }
}

export default Meal;