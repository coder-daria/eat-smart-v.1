import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
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

    material() {
        return (
            <div>
                <SelectField
                    floatingLabelText="Frequency"
                    value={this.state.value}
                    onChange={this.handleChange1}
                >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
            </div>
        );
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
            return <MenuItem value={item.mealName} primaryText={item.mealName} />
        });

        const coolSelect = this.material();

        return (
            <div className="mealsDetailsContainer">
                <div className="mealsDetails">
                    <h3>Meals details</h3><br />
                    <SelectField onChange={this.handleChange} floatingLabelText="Choose a meal">
                        {meal}
                    </SelectField>
                    {foodDetailsList}
                </div>
                <div>
                    <Chart className="chart"/>
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