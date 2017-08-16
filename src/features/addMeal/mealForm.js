import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import {Field, FieldArray, reduxForm} from 'redux-form';
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

    isValidQuantity(q) {
        return !isNaN(q) && q > 0;
    }

    validateQuantities(quantitiesArray) {
        function allTrue(x, y) {
            return x && y;
        }

        return quantitiesArray.map(this.isValidQuantity).reduce(allTrue, true);
    }

    styleForQuantity(quantity) {
        if (!this.isValidQuantity(quantity)) {
            return {backgroundColor: "red"};
        } else {
            return {backgroundColor: "white"};

        }
    }

    //http://redux-form.com/7.0.3/docs/api/FieldArray.md/#iteration
    renderSingleFood = (food, index, fields) => {
        const remove = (index) => () => fields.remove(index);
        const renderFoodName = field => <div>{field.input.value}</div>;
        const renderFoodQuantity = field => <div><input {...field.input} placeholder={field.label} type={field.type}/></div>;
        return (
            <li key={index}>
                <Field name={`${food}.name`} type="text" component={renderFoodName} label="Name"/>
                <Field name={`${food}.quantity`} type="number" component={renderFoodQuantity} label="Quantity"/>
                <button type="button" onClick={remove(index)}>Remove</button>
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

    renderMealPreferences = field => {
      return(
        <div>
          {field.label}
          <AutoComplete
                    items={this.props.mealsPreferences}
                    onSelect={field.input.onChange}
                    onChange={field.input.onChange}
                />
        </div>
      )
    }

    render() {
        const submit = this.props.handleSubmit(this.props.awesomeAddMeal);
        return (
            <div className="mealParentContainer">
                <form onSubmit={submit}>
                    <Field name="meal" component={this.renderMealPreferences} label="Meal" />
                    <FieldArray name="foods" component={this.renderFoods}/>
                    <button type="submit">Submit && look at the console</button>
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