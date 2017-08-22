import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from '../../common/FormFields';
import MaterialIcon from '../../common/MaterialIcon';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { pink500 } from 'material-ui/styles/colors';
import './mealForm.css';

const validate = values => {
    const errors = { meal: "", foods: [] }
    if (!values.meal) {
        errors.name = 'Required'
    }
    if (!values.foods || !values.foods.length) {
        errors.foods = { _error: 'Select at least one food' };
    } else {
        const foodsArrayErrors = [];

        values.foods.forEach((food, index) => {
            const foodErrors = {};
            if (!food || !food.quantity) {
                foodErrors.quantity = 'Required';
                foodsArrayErrors[index] = foodErrors;
            }
        });
        if (foodsArrayErrors.length) {
            errors.foods = foodsArrayErrors;
        }
    }
    return errors;
}


class MealForm extends React.Component {

    renderFoods = foods => {
        const addFood = (name, food) => foods.fields.push({ name: food.name, id: food.id, units: "grams" });
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
        const renderFoodName = field => <div className="specificName">{field.input.value}</div>;
        return (
            <li key={index} className="mealContainer">
                <div className="mealHeader">
                    <div className="name">
                        <Field name={`${food}.name`} type="text" component={renderFoodName} label="Name" />
                    </div>
                    <div className="icon">
                        <MaterialIcon type="button" label="Remove" secondary={true} onClick={remove(index)}>
                            <ContentClear hoverColor={pink500} />
                        </MaterialIcon>
                    </div>
                </div>
                <div className="quantity">
                    <h2>Quantity</h2>
                    <Field name={`${food}.quantity`} component={renderTextField} label="Quantity" />
                </div>
            </li>
        )
    }

    renderMealPreferences = field => {
        return (
            <div className="mealPreferences">
                <h2>Create your meal</h2>
                <AutoComplete
                    items={this.props.mealsPreferences}
                    onSelect={field.input.onChange}
                    onChange={field.input.onChange}
                />
            </div>
        )
    }

    clearAndSubmit= values => {
        this.props.addMeal(values, this.props.date);
        this.props.reset();
    }

    render() {
        const submit = this.props.handleSubmit(this.clearAndSubmit);
        const disabled = this.props.invalid || this.props.pristine;
        return (
            <div className="mealForm">
                <form className="mealParentContainer" onSubmit={submit}>
                    <div>
                        <Field name="meal" component={this.renderMealPreferences} label="Meal" />
                    </div>
                    <div>
                        <FieldArray name="foods" component={this.renderFoods} />
                    </div>
                    <div className="raisedButton">
                        <RaisedButton type="submit" label="Submit" primary={true} disabled={disabled} />
                    </div>
                </form>
            </div>
        )
    }
}

MealForm.propTypes = {
    foods: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    foodsToSearch: PropTypes.array.isRequired,
    addMeal: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'addMeal',
    validate
})(MealForm);