import React from 'react';
import OurAutoComplete from '../../common/OurAutoComplete';

class Search extends React.Component {
    state = {
        input: "",
    }

    // old() {
    //     let picture = (item) => {
    //         if (item.properties && item.properties.url) {
    //             return <img alt={item.name} src={item.properties.url} width="200" height="100" />
    //         }
    //     }
    //     return (<div>
    //         <Autocomplete
    //             getItemValue={(item) => item.name}
    //             items={this.props.foods}
    //             renderItem={(item, isHighlighted) =>
    //                 <div>
    //                     <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
    //                         {item.name}
    //                     </div>
    //                     {picture(item)}
    //                 </div>
    //             }
    //             value={this.state.input}
    //             onChange={(e) => {
    //                 this.setState({
    //                     input: e.target.value
    //                 });
    //             }}
    //             onSelect={(val, food) => {
    //                 this.props.onSelect(food);
    //                 this.setState({
    //                     input: ""
    //                 })
    //             }}
    //             shouldItemRender={this.showItem}
    //         />
    //     </div>)
    // }

    showItem = (item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    render() {
        const onSelect = (val, food) => {
            this.props.onSelect(food);
            this.setState({
                input: ""
            })
        };
        return (
            <OurAutoComplete items={this.props.foods} onChange={onChange} onSelect={onSelect} shouldItemRender={this.showItem} />
        )
    }
}

export default Search;