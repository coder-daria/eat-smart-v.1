import React from 'react';
import Autocomplete from 'react-autocomplete';

class OurAutoComplete extends React.Component {
    state = {
        input: "",
    }

    /*
    items
    showItem
    */
    onChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    render() {
        let picture = (item) => {
            if (item.properties && item.properties.url) {
                return <img alt={item.name} src={item.properties.url} width="200" height="100" />
            }
        }
        return (
            <div>
                <p>TODO...</p>
                <Autocomplete
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
                    shouldItemRender={this.props.shouldItemRender}
                />
            </div>

        )
    }
}

export default OurAutoComplete;