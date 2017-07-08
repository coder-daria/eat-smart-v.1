import React from 'react';

class ListOfFood extends React.Component {
    render() {
        let array = this.props.list;
        let food = array.map((item) => {
            return (
                <div>
                    <li>{item.name}</li>
                    <button onClick={() => this.props.onClick(item.name)}>-</button>
                </div>
            )
        });
        return (
            <div>
                <ul>
                    {food}
                </ul>
            </div>

        )
    }
}

export default ListOfFood;