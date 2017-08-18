import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import {Field, FieldArray, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './mealForm.css';

class awesomeForm extends React.Component {
    state = {
        name: "",
        quantities: [],
        allQuantitiesFulfilled: false,
    }

    onChange = name => {
        this.setState({
            name: name
        });
    }

    // isValidQuantity(q) {
    //     return !isNaN(q) && q > 0;
    // }

    // validateQuantities(quantitiesArray) {
    //     function allTrue(x, y) {
    //         return x && y;
    //     }

    //     return quantitiesArray.map(this.isValidQuantity).reduce(allTrue, true);
    // }

    // styleForQuantity(quantity) {
    //     if (!this.isValidQuantity(quantity)) {
    //         return {backgroundColor: "red"};
    //     } else {
    //         return {backgroundColor: "white"};

    //     }
    // }

    renderMealPreferences = field => {
      return(
        <div>
          {field.label}
          <AutoComplete
                    floatingLabelText="Meal preference"
                    value="Chose meal preference"
                    items={this.props.mealsPreferences}
                    onSelect={field.input.onChange}
                    onChange={field.input.onChange}
                />
        </div>
      )
    }
    renderSingleFood = (food, index, fields) => {
        const remove = (index) => () => fields.remove(index);
        const renderFoodName = field => <div>{field.input.value}</div>;

        return (
            <li key={index}>
                <Field name={`${food}.name`} type="text" component={renderFoodName} label="Name"/>
                <Field name={`${food}.quantity`} component={this.renderTextField} label="Quantity"/><br />
                <RaisedButton type="button" label="Remove" secondary={true} onClick={remove(index)}/>
            </li>
        )
    }

    renderFoods = foods => {
        const addFood = (name, food) => foods.fields.push({name: this.props.foods[food.properties.id].name, id: food.properties.id, units: "grams"});
        return (
            <div>
              <AutoComplete
                    items={this.props.foodsToSearch}
                    onSelect={addFood}
                />
                <ul>
                    {foods.fields.map(this.renderSingleFood)}
                </ul>
            </div>
        )
    }
    renderTextField = field => {
        return (
            <TextField
                hintText={field.label}
                floatingLabelText={field.label}
                errorText={field.meta.touched && field.meta.error}
                {...field.input}
                {...field.custom}
            />
        )
    }

    renderSelectField = field => {
        return (
            <TextField
                hintText={field.label}
                errorText={field.meta.touched && field.meta.error}
                {...field.input}
                {...field.custom}
                floatingLabelText={field.label}
            />
        )
    }

    render() {
        const submit = this.props.handleSubmit(this.props.addMeal);
        return (
            <div className="mealParentContainer">
                <form onSubmit={submit}>
                    <Field name="meal" component={this.renderMealPreferences} label="Meal" />
                    <FieldArray name="foods" component={this.renderFoods}/>
                    <RaisedButton type="submit" label="Submit" primary={true}/>
                </form>
            </div>
        )
    }
}

awesomeForm.propTypes = {
    foodsBeingAddedToNewMeal: PropTypes.array.isRequired,
    foods: PropTypes.object.isRequired,
    foodsToSearch: PropTypes.array.isRequired,
    removeFromMeal: PropTypes.func.isRequired,
    addMeal: PropTypes.func.isRequired,
    mealsPreferences: PropTypes.array,


};

export default reduxForm({form: 'addMeal'})(awesomeForm);