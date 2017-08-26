import React from 'react';
import AutoComplete from '../../common/AutoComplete';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {  renderSelectField } from '../../common/form/FormFields';
import './mealForm.css';
import MenuItem from 'material-ui/MenuItem';
import MealsDetailsContainer from "../mealDetails/MealsDetailsContainer";
import EditableChip1 from "../../common/EditableChip1";

const validate = values => {
    const errors = { meal: "", foods: [] }
    if (!values.meal) {
        errors.meal = 'Required'
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
    state = {
        editing: false
    }

    renderFoods = foods => {
        const addFood = (name, food) => {
            if (foods.fields.length === 0) {
                foods.fields.push({ name: food.name, id: food.id, units: "grams" });
            }
            else {
                let itEquals = false;
                for (let i = 0; i < foods.fields.length; i++) {
                    if (foods.fields.get(i).name === name) {
                        itEquals = true;
                    }
                }
                if (itEquals === false) {
                    return foods.fields.push({ name: food.name, id: food.id, units: "grams" });
                }
            }
        };

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
        const remove = () => fields.remove(index);
        return (
            <div>
                <li index={index}>
                <EditableChip1 field={food} index={index} fields={fields} onDelete={remove}/>
                </li>
            </div>
        )
    }

    renderMealPreferences = () => {
        let selectPreference = this.props.mealsPreferences.map(preference => {
            return <MenuItem value={preference} primaryText={preference.name} key={preference.name} />
        })
        return (
            <div className="mealPreferences">
                <Field name="meal" component={renderSelectField} className="someClass" label="Meal">
                    {selectPreference}
                </Field>
            </div>
        )
    }

    clearAndSubmit = values => {
        this.props.addMeal(values, this.props.date);
        this.props.reset();
    }

    render() {
        const submit = this.props.handleSubmit(this.clearAndSubmit);
        const disabled = this.props.invalid || this.props.pristine;
        return (
            <div className="addMealContainer">
                <form className="mealParentContainer" onSubmit={submit}>
                    <div>
                        {this.renderMealPreferences()}
                    </div>
                    <div>
                        <FieldArray name="foods" component={this.renderFoods} />
                    </div>
                    <div className="mealRaisedButton">
                        <RaisedButton type="submit" label="Submit" primary={true} disabled={disabled} />
                    </div>
                </form>
                <MealsDetailsContainer />
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