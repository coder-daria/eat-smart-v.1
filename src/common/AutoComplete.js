import React from 'react';
import ReactAutoComplete from 'react-autocomplete';
import PropTypes from 'prop-types';
import AutoComplete1 from 'material-ui/AutoComplete';

class AutoComplete extends React.Component {
    state = {
        input: "",
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ input: value });

        if (this.props.onChange) {
            this.props.onChange(value)
        }
    };

    propertyUsedToFilter = item => {
        if (this.props.propertyUsedToFilter) {
            return this.props.propertyUsedToFilter(item);
        } else {
            return item.name;
        }
    };

    
    onSelect = (name, item) => {
        this.setState({ input: name });

        this.props.onSelect(name, item);
    };

    getItemValue = item => {
        if (this.props.getItemValue) {
            return this.props.getItemValue(item);
        } else {
            return item.name;
        }
    };

    shouldItemRender = (item, value) => {
        const thingToCompare = this.propertyUsedToFilter(item);
        return thingToCompare.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    render() {
        let picture = (item) => {
            if (item.properties && item.properties.url) {
                return <img alt={item.name} src={item.properties.url} width="200" height="100" />
            }
        }
        const previousAutoComplete = <ReactAutoComplete
                    getItemValue={this.getItemValue}
                    renderItem={(item, isHighlighted) =>
                        <div>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.name}
                            </div>
                            {picture(item)}
                        </div>
                    }
                    items={this.props.items}
                    value={this.state.input}
                    onChange={this.onChange}
                    onSelect={this.onSelect} // The this.props.onSelect refers to what?
                    shouldItemRender={this.shouldItemRender}
                />;
        const config = {text: 'name', value: 'name'};
        return (
            <div>
                {previousAutoComplete}
                <AutoComplete1
                    floatingLabelText="showAllItems"
                    hintText="Type anything"
                    openOnFocus={true}
                    filter={AutoComplete1.noFilter}
                    dataSource={this.props.items}
                    dataSourceConfig={config} />
            </div>

        )
    }
}

AutoComplete.propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    getItemValue: PropTypes.func,
    propertyUsedToFilter: PropTypes.func
};

export default AutoComplete;