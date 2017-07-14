import React from 'react';
import Autocomplete from 'react-autocomplete';

class MealsDetails extends React.Component {
    state = {
        input: ""
    }
    showItem = (item, value) => item.mealName.toLowerCase().indexOf(value.toLowerCase()) !== -1
    render() {
        let {theWholeMeal} = this.props;
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
                    onChange={e => {
                        this.setState({
                            input: e.target.value
                        });
                    }}
                    onSelect={(val, meal) => {
                        this.props.onSelect(meal);
                    }}
                    shouldItemRender={this.showItem}
                />
                <ul>
                    <li>Name: {theWholeMeal.name}</li>
                    <li>Fat: {theWholeMeal.mealDetails.fat} </li>
                    <li>Protein: {theWholeMeal.mealDetails.protein}</li>
                    <li>Carbs: {theWholeMeal.mealDetails.carbs}</li>
                </ul>
            </div>
        )
    }
}

export default MealsDetails;