import React from 'react';
import AddNewProduct from './AddNewProduct';
import {newProduct} from './Actions';

class AddNewProductContainer extends React.Component {
    onSubmit = product => {
        console.log("Received in the AddNewProductContainer");
        this.props.dispatch(newProduct(product));
    }
    render() {
        return (
            <div>
                <AddNewProduct onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default AddNewProductContainer;