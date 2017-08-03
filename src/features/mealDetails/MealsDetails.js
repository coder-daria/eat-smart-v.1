import React from 'react';
import PropTypes from 'prop-types';

class MealsDetails extends React.Component {
    showItem = (item, value) => item.mealName.toLowerCase().indexOf(value.toLowerCase()) !== -1

    handleChange = (event) => {
        if(event.target.value !== "empty") {
         this.props.onSelect(event.target.value);
        }
    }
    render() {
        // for(let key in this.props.meals) {
        //     console.log(this.props.meals[key])
        //     // if(this.props.meals[key].mealName === theWholeMeal.mealName) {
        //     //     theWholeMeal.mealDetails.fat = (theWholeMeal.mealDetails.fat * this.props.meals[key].details.quantity)/100
        //     // }
        // }

        let { theWholeMeal } = this.props;
        const foodDetailsList = theWholeMeal.mealName === "" ? "" : (<ul>
            <li>Name: {theWholeMeal.mealName} </li>
            <li>Fat: {theWholeMeal.mealDetails.fat} </li>
            <li>Protein: {theWholeMeal.mealDetails.protein}</li>
            <li>Carbs: {theWholeMeal.mealDetails.carbs}</li>
        </ul>)

        const meals = this.props.meals;
        const meal = meals.map(item => {
            return <option value={item.mealName}>{item.mealName}</option>
        })

        return (
            <div>
                <h3>Meals details</h3><br/>
                <select onChange={this.handleChange}>
                    <option value="empty">Choose meal</option>
                    {meal}
                </select>
                {foodDetailsList}
            </div>
        )
    }
}

MealsDetails.propTypes = {
    onSelect: PropTypes.func.isRequired,
    theWholeMeal: PropTypes.object.isRequired,
    meals: PropTypes.array.isRequired
};


export default MealsDetails;