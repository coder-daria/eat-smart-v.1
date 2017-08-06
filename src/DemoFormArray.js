import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'


const validate = values => {
    const errors = {};
    if (!values.meal || values.meal.length < 2) {
        errors.meal = 'Meal name is required';
    }
    if (!values.foods || values.foods.length < 1) {
        errors.foods = { _error: 'At least one food must be entered' };
    } else {
        const foodsErrors = [];
        values.foods.forEach((food, index) => {
            const foodErrors = {};
            if (!food || food.quantity < 20) {
                foodErrors.quantity = 'You should eat more';
                foodsErrors[index] = foodErrors;
            }
        });
        if (foodsErrors.length) {
            errors.foods = foodsErrors;
        }
    }
    return errors;
};


const renderFoods = (foods) => (
    <div>
        <ul>
            <li>
                <button type="button" onClick={() => foods.fields.push({})}>Add food</button>
            </li>
            {foods.fields.map((food, index) => (
                <li key={index}>
                    <button type="button" onClick={() => foods.fields.remove(index)} > Remove food</button>
                    <h4>Food #{index + 1}</h4>
                    <Field
                        name={`${food}.quantity`}
                        type="text"
                        component={renderField}
                        label="quantity"
                    />
                </li>
            ))}
        </ul>
        {showErrors(foods)}
    </div>
);

const showErrors = field => {
    console.log(field)
    const shouldShowErrors = field.meta.dirty && field.meta.error;
    if (shouldShowErrors) {
        return (<span> {field.meta.error} </span>)
    }
}

const renderField = (field) => {
    return (
        <div>
            <label>
                {field.label}
            </label>
            <div>
                <input {...field.input} placeholder={field.label} type={field.type} />
                {showErrors(field)}
            </div>
        </div>
    )
}

const AddNewMealForm = props => {
    const { pristine, reset, invalid, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="meal" type="text" component={renderField} label="Meal name" />
            <FieldArray name="foods" component={renderFoods} />
            <div>
                <button type="submit" disabled={invalid}>
                    Submit
                </button>
                <button type="button" disabled={pristine} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addNewMeal',
    validate
})(AddNewMealForm)