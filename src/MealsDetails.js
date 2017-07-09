import React from 'react';

class MealsDetails extends React.Component {
    render() {
        // let array = this.props.meals;
        // let breakfast = array.map((item) => {
        //     return (
        //         <li key={item.name}>
        //             {item.name}<br />
        //             Fat: {item.properties.fat}<br />
        //             Protein: {item.properties.protein}<br />
        //             Carbs: {item.properties.carbs}<br />
        //         </li>
        //     )
        // });
        return (
            <div>
                  {/*{console.log(this.props.meals)}*/}
                <h3>Meals details</h3>
                <ul>
                    <li>Name:</li>
                    <li>Fat:</li>
                    <li>Protein:</li>
                    <li>Carbs:</li>
                    {/*{breakfast}*/}
                </ul>
            </div>
        )
    }
}

export default MealsDetails;