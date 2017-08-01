import React from 'react';
import ReactAutoComplete from 'react-autocomplete';

class AutoComplete extends React.Component {
    state = {
        input: "",
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    showItem = (item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    render() {
        let picture = (item) => {
            if (item.properties && item.properties.url) {
                return <img alt={item.name} src={item.properties.url} width="200" height="100" />
            }
        }
        return (
            <div>
                <ReactAutoComplete
                    getItemValue={(item) => item.name}
                    items={this.props.items}
                    renderItem={(item, isHighlighted) =>
                        <div>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.name}
                            </div>
                            {picture(item)}
                        </div>
                    }
                    value={this.state.input}
                    onChange={this.onChange}
                    onSelect={this.props.onSelect}
                    shouldItemRender={this.showItem}
                />
            </div>

        )
    }
}

export default AutoComplete;