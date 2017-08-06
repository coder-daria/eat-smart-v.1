import React from 'react';
import { Field, reduxForm } from 'redux-form'


const validate = values => {
    const errors = {}
    if (!values.username || values.username.length < 2) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.age || values.age == 17) {
        errors.age = "you are too young";
    }
    return errors
}

const wrongField = {
    backgroundColor: "red"
}

const renderField = field => {
    const style = field.meta.dirty && field.meta.error ? wrongField : undefined;
    return (
        <div>
            <label style={style}>
                {field.label}
            </label>
            <div>
                <input {...field.input} placeholder={field.label} type={field.type} />
                {field.meta.touched &&
                    ((field.meta.error &&
                        <span>
                            {field.meta.error}
                        </span>))}
            </div>
        </div>
    )
}
const DemoForm = props => {
    const { pristine, reset, invalid, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="age" type="number" component={renderField} label="Age" />
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
    form: 'demoForm',
    validate
})(DemoForm)