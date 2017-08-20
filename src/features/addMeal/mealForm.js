import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {renderTextField} from '../../common/FormFields';
import MaterialIcon from '../../common/MaterialIcon';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { pink500 } from 'material-ui/styles/colors';
import './mealForm.css';

const validate = values => {
    const errors = {meal:"", foods: []}
    if (!values.meal) {
        errors.name = 'Required'
    }
    if(!values.foods || !values.foods.length){
        errors.foods = {_error: 'Select at least one food'};
    } else {
        const foodsArrayErrors = [];

        values.foods.forEach((food, index) => {
            const foodErrors = {};
            if (!food || !food.quantity){
                foodErrors.quantity = 'Required';
                foodsArrayErrors[index] = foodErrors;
            }
        });
        if(foodsArrayErrors.length) {
            errors.foods = foodsArrayErrors;
        }
    }
    return errors;
}


class MealForm extends React.Component {

    renderFoods = foods => {
        const addFood = (name, food) => foods.fields.push({ name: this.props.foods[food.properties.id].name, id: food.properties.id, units: "grams" });
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
    renderSingleFood = (food, index, fields) => {
        const remove = (index) => () => fields.remove(index);
        const renderFoodName = field => <div>{field.input.value}</div>;
        return (
            <li key={index}>
                <Field name={`${food}.name`} type="text" component={renderFoodName} label="Name" />
                <Field name={`${food}.quantity`} component={renderTextField} label="Quantity" />
                <MaterialIcon type="button" label="Remove" secondary={true} onClick={remove(index)}>
                    <ContentClear hoverColor={pink500} />
                </MaterialIcon>
            </li>
        )
    }

    renderMealPreferences = field => {
        return (
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

    clearAndSubmit= values => {
        this.props.addMeal(values);
        this.props.reset();
    }

    render() {
        const submit = this.props.handleSubmit(this.clearAndSubmit);
        return (
            <div className="mealParentContainer">
                <form onSubmit={submit}>
                    <Field name="meal" component={this.renderMealPreferences} label="Meal" />
                    <FieldArray name="foods" component={this.renderFoods} />
                    <RaisedButton type="submit" label="Submit" primary={true} disabled={this.props.invalid} />
                </form>
            </div>
        )
    }
}

MealForm.propTypes = {
    foodsBeingAddedToNewMeal: PropTypes.array.isRequired,
    foods: PropTypes.object.isRequired,
    foodsToSearch: PropTypes.array.isRequired,
    removeFromMeal: PropTypes.func.isRequired,
    addMeal: PropTypes.func.isRequired,
    mealsPreferences: PropTypes.array.isRequired
};

export default reduxForm({
    form: 'addMeal',
    validate
})(MealForm);