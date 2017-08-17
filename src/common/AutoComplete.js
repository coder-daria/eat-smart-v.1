import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete1 from 'material-ui/AutoComplete';

class AutoComplete extends React.Component {
    state = {
        input: "",
    }
    onChange = (e) => {
        const value = e;
        this.setState({ input: value });
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    };

    onSelect = (food, index) => {
        this.setState({ input: food.name });
        this.props.onSelect(food.name, food);
    };
    // propertyUsedToFilter = item => {
    //     if (this.props.propertyUsedToFilter) {
    //         return this.props.propertyUsedToFilter(item);
    //     } else {
    //         return item.name;
    //     }
    // };


    // getItemValue = item => {
    //     if (this.props.getItemValue) {
    //         return this.props.getItemValue(item);
    //     } else {
    //         return item.name;
    //     }
    // };

    // shouldItemRender = (item, value) => {
    //     const thingToCompare = this.propertyUsedToFilter(item);
    //     return thingToCompare.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    // }
    render() {
        // let picture = (item) => {
        //     if (item.properties && item.properties.url) {
        //         return <img alt={item.name} src={item.properties.url} width="200" height="100" />
        //     }
        // }
        // const previousAutoComplete = <ReactAutoComplete
        //             getItemValue={this.getItemValue}
        //             renderItem={(item, isHighlighted) =>
        //                 <div>
        //                     <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        //                         {item.name}
        //                     </div>
        //                     {picture(item)}
        //                 </div>
        //             }
        //             items={this.props.items}
        //             value={this.state.input}
        //             onChange={this.onChange}
        //             onSelect={this.onSelect}
        //             shouldItemRender={this.shouldItemRender}
        //         />;
        const config = {text: 'name', value: 'name'};
        return (
            <div>
                <AutoComplete1
                    floatingLabelText=""
                    hintText="Click to choose"
                    openOnFocus={true}
                    filter={AutoComplete1.fuzzyFilter}
                    dataSource={this.props.items}
                    dataSourceConfig={config}
                    onUpdateInput={this.onChange}
                    onNewRequest={this.onSelect}
                     />
            </div>

        )
    }
}

AutoComplete.propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    getItemValue: PropTypes.func,
    // propertyUsedToFilter: PropTypes.func
};

export default AutoComplete;