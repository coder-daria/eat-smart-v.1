import React from 'react';
import AutoComplete from '../../common/AutoComplete';

class Search extends React.Component {
    state = {
        input: "",
    }


    render() {
        const onSelect = (val, food) => {
            this.props.onSelect(food);
            this.setState({
                input: ""
            })
        };
        return (
            <AutoComplete items={this.props.foods} onSelect={onSelect} />
        )
    }
}

export default Search;