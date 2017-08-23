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
    
    render() {
        const menuProps = {
            desktop: true,
          };
        const config = {text: 'name', value: 'name'};
        return (
            <div>
                <AutoComplete1
                    maxSearchResults= {20}
                    floatingLabelText="Search"
                    openOnFocus={true}
                    filter={AutoComplete1.fuzzyFilter}
                    dataSource={this.props.items}
                    dataSourceConfig={config}
                    onUpdateInput={this.onChange}
                    onNewRequest={this.onSelect}
                    menuProps={menuProps}
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
};

export default AutoComplete;