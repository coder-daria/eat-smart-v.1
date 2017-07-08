import React from 'react';

class ListOfFood extends React.Component {
    render() {
        let array = this.props.list;
        let food = array.map((item) => {
            return <li>{item.name}</li>
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