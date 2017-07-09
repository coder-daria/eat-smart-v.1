import React from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends React.Component {
    state = {
        input: "",
    }

    showItem = (item, value) => {
        return (
            item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
    }
    render() {
        let picture = (item) => {
            if(item.properties && item.properties.url){
                return <img alt={item.name} src={item.properties.url} width="200" height="100"/>
            }
        }
        return (
            <div style ={this.props.style}>
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
                    onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({
                            input: e.target.value
                        });
                    }}
                    onSelect={(val, item) => {
                        this.props.onSelect(item);
                    }}
                    shouldItemRender={this.showItem}
                />
            </div>
            
        )
    }
}

export default Search;