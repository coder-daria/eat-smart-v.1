import React from 'react';

class Meal extends React.Component {
    state = {
        mealName: ""
    }
    handleChange = (event) => {
        this.setState({ mealName: event.target.value })
    }
    render() {
        let array = this.props.list;
        let food = array.map((item) => {
            return (
                <div>
                    {/*{console.log(this.props.list)}*/}
                    <li>{item.name}</li>
                    <button onClick={() => this.props.onClick(item.name)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <h3>Add meal</h3>
                Name: <input name="mealName" type="text" value={this.state.mealName} onChange={this.handleChange} /><br />
                <ul>
                    {food}
                </ul>
                <button type="button" onClick={() => {
                    this.props.add(this.props.list)
                    this.setState({ mealName: "" })
                }
                }
                    disabled={!this.state.mealName}>Save meal</button>
            </div>
        )
    }
}

export default Meal;