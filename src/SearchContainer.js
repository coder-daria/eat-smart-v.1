import React from 'react';
import Search from './Search';

class SearchContainer extends React.Component {
    render() {
        return (
            <div>
                <Search items={this.props.state.items} />
            </div>
        )
    }
}

export default SearchContainer;