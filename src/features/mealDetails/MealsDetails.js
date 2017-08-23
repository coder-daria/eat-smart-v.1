import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chart from '../../Chart.js';
import './mealsDetails.css';

class MealsDetails extends React.Component {
    state = {
        value: 1,
    };
    showItem = (item, value) => item.mealName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    handleChange = (event, index, value) => {
        console.log(`event: ${event}, value: ${value}, index: ${index}`)
        if (value !== "empty") {
            this.props.onSelect(value);
        }
    }
    handleChange1 = (event, index, value) => {
        console.log(value)
        this.setState({ value })
    };

    render() {
        // for(let key in this.props.meals) {
        //     console.log(this.props.meals[key])
        //     // if(this.props.meals[key].mealName === theWholeMeal.mealName) {
        //     //     theWholeMeal.mealDetails.fat = (theWholeMeal.mealDetails.fat * this.props.meals[key].details.quantity)/100
        //     // }
        // }

        let { theWholeMeal } = this.props;
        const foodDetailsList = theWholeMeal.mealName === "" ? "" : (
            <ul className="specificDetails">
                <li>
                    <h3>Name</h3>
                    <div>
                    {theWholeMeal.mealName}
                    </div>
                </li>
                <li>
                    <h3>Fat</h3>
                    <div>
                    {theWholeMeal.mealDetails.fat} g
                    </div>
                </li>
                <li>
                    <h3>Protein</h3>
                    <div>
                    {theWholeMeal.mealDetails.protein} g
                    </div>
                 </li>
                <li>
                    <h3>Carbs</h3>
                    <div>
                    {theWholeMeal.mealDetails.carbs} g
                    </div>
                </li>
            </ul>)

        const meals = this.props.meals;
        const meal = meals.map(item => {
            return <MenuItem key={item.mealName} value={item.mealName} primaryText={item.mealName}/>
        });

        return (
            <div className="mealsDetailsContainer">
                    <h2>Meals details</h2>
                    <div className="chart">
                    <Chart/>
                    </div>
                    <SelectField onChange={this.handleChange} floatingLabelText="Choose a meal">
                        {meal}
                    </SelectField>
                    <div>
                    {foodDetailsList}
                    </div>
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