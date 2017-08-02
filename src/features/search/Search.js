import React from 'react';
import AutoComplete from '../../common/AutoComplete';

class Search extends React.Component {


    render() {
        const onSelect= (value, food) => {
            this.props.onSelect(food.properties.id);
        };
        let picture = (item) => {
            if (item.properties && item.properties.url) {
                return <img alt={item.name} src={item.properties.url} width="200" height="100" />
            }
        }
        return (
            <div>
                Search
                <AutoComplete
                    items={this.props.foods}
                    onSelect={onSelect}
                />
            </div>
        )
    }
}

export default Search;