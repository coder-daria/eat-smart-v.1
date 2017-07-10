import React from 'react';
import Autocomplete from 'react-autocomplete';

class MealsDetails extends React.Component {
    state = {
        input: "",
        fat: 0,
        protein: 0,
        carbs: 0
    }
    showItem = (item, value) => {
        return (
            item.mealName.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
    }
    calculateTotal(meal) {
        let details = {}
        meal.reduce((total, num) => {
            return details = {
                fat: total.properties.fat + num.properties.fat,
                protein: total.properties.protein + num.properties.protein,
                carbs: total.properties.carbs + num.properties.carbs
            }
        })
            this.setState({
                fat: details.fat,
                protein: details.protein,
                carbs: details.carbs
            });
    }
    render() {
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
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        });
                    }}
                    onSelect={(val, item) => {
                        this.props.onSelect(item);
                        this.calculateTotal(item.details)
                        {/*{console.log(item.details)}*/}

                    }}
                    shouldItemRender={this.showItem}
                />
                <ul>
                    <li>Name: {this.props.selectedMeal.mealName}</li>
                    <li>Fat: {this.state.fat} </li>
                    <li>Protein: {this.state.protein}</li>
                    <li>Carbs: {this.state.carbs}</li>
                </ul>
            </div>
        )
    }
}

export default MealsDetails;