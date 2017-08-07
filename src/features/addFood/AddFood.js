import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.name || values.name.length < 2) {
        errors.name = 'Required'
    }
    if (!values.fat) {
        errors.fat = 'Required'
    }
    if (!values.protein) {
        errors.protein = "Required";
    }
    if (!values.carbs) {
        errors.carbs = "Required";
    }
    return errors
}

const wrongField = {
    border: "2px solid lightcoral",
    outline: "none" 
}

const renderField = field => {
    const style = field.meta.dirty && field.meta.error ? wrongField : undefined;
    return (
        <div>
            <label>
                {field.label}
            </label>
            <div>
                <input style={style} {...field.input} placeholder={field.label} type={field.type} />
                {field.meta.touched &&
                    ((field.meta.error &&
                        <span>
                            {field.meta.error}
                        </span>))}
            </div>
        </div>
    )
}
const AddFood = props => {
    const { pristine, reset, invalid, handleSubmit } = props
    const loading = props.isLoading ? <p>loading</p> : null;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="name" type="text" component={renderField} label="Name" />
                <Field name="fat" type="number" component={renderField} label="Fat" />
                <Field name="protein" type="number" component={renderField} label="Protein" />
                <Field name="carbs" type="number" component={renderField} label="Carbs" />
                <div>
                    <button type="submit" disabled={invalid}>
                        Submit
                </button>
                    <button type="button" disabled={pristine} onClick={reset}>
                        Clear Values
                </button>
                </div>
            </form>
             {loading} 
        </div>
    )
}
AddFood.propTypes = {
    isLoading: PropTypes.bool,
};

export default reduxForm({
    form: 'addFood',
    validate
})(AddFood)


