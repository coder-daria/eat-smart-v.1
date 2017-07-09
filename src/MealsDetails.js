import React from 'react';

class MealsDetails extends React.Component {
    render() {
        let array = this.props.food.foods; // Array of 3 objects
        let breakfast = array.map((item) => {
            return (
                <li key={item.name}>
                    {item.name}<br />
                    Fat: {item.properties.fat}<br />
                    Protein: {item.properties.protein}<br />
                    Carbs: {item.properties.carbs}<br />
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {breakfast}
                </ul>
                <button>Save</button>
            </div>
        )
    }
}

export default MealsDetails;