import React from 'react';
import Autocomplete from 'react-autocomplete';

class MealsDetails extends React.Component {
    showItem = (item, value) => item.mealName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    render() {
        let {theWholeMeal} = this.props;
        const foodDetailsList = theWholeMeal.mealName === "" ? "" :  (<ul>
                    <li>Name: {theWholeMeal.mealName} </li>
                    <li>Fat: {theWholeMeal.mealDetails.fat} </li>
                    <li>Protein: {theWholeMeal.mealDetails.protein}</li>
                    <li>Carbs: {theWholeMeal.mealDetails.carbs}</li>
                    </ul> )

        return (
            <div>
                <h3>Meals details</h3>
                Choose a meal:
                <Autocomplete
                    getItemValue={(item) => item.mealName}
                    items={this.props.meals}
                    renderItem={(item, isHighlighted) =>
                        <div>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.mealName}
                            </div>
                        </div>
                    }
                    value={theWholeMeal.mealName}

                    onSelect={(val, meal) => {
                        this.props.onSelect(meal);
                    }}
                    shouldItemRender1={this.showItem}
                />
                {foodDetailsList}
            </div>
        )
    }
}

export default MealsDetails;