import React from 'react';
import Search from './Search';
import { fetchProducts, convertToArray } from './functions.js';

class SearchContainer extends React.Component {
    render() {
        const items = convertToArray(fetchProducts());
        return (
            <div>
                <Search items={items} />
            </div>
        )
    }
}

export default SearchContainer;