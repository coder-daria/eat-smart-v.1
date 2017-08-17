import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './addFood.css';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    else if (values.name.length < 2) {
        errors.name = 'Chosen name is too short'
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

const renderField = field => {
    const wrongField = {
        border: "1px solid #F72A45",
    }
    const errorMessage = {
        color: "#F72A45",
        fontWeight: "bold"
    }
    const style = field.meta.dirty && field.meta.error ? wrongField : undefined;
    return (
        <div>
            <label>
                {field.label}
            </label>
            <div>
                <TextField hintText={field.label} {...field.input} type={field.type} underlineStyle={style} /><br />
                {field.meta.touched && ((field.meta.error && <span style={errorMessage}>{field.meta.error}</span>))}
            </div><br />
        </div>
    )
}
const AddFood = props => {
    const { pristine, reset, invalid, handleSubmit } = props
    const loading = props.isLoading ? <CircularProgress /> : null;
    return (
        <div className="addFoodContainer">
            <form onSubmit={handleSubmit}>
                <Field name="name" type="text" component={renderField} label="Name" />
                <Field name="fat" type="number" component={renderField} label="Fat" />
                <Field name="protein" type="number" component={renderField} label="Protein" />
                <Field name="carbs" type="number" component={renderField} label="Carbs" />
                <RaisedButton label="Submit" type="submit" primary={true} disabled={invalid} /> <RaisedButton label=" Clear values" type="submit" disabled={pristine} onClick={reset} backgroundColor="#6DBEC2" labelColor="#F0F2F2"/>
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


