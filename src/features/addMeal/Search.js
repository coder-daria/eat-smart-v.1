import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';

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
                    items={this.props.foodsToSearch}
                    onSelect={onSelect}
                />
            </div>
        )
    }
}

Search.propTypes = {
    onSelect: PropTypes.func.isRequired,
    foods: PropTypes.array.isRequired
};

export default Search;