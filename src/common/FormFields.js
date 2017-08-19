import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EditableChip from './EditableChip';
import {Field, FieldArray} from 'redux-form';
import React from 'react';

export const renderTextField = field => {
  const errorText = field.meta.touched ? field.meta.error : null;
  return (
    <div>
      <label>
        {field.label}
      </label>
      <div>
        <TextField hintText={field.label} {...field.input} type={field.type} errorText={errorText} /><br />
      </div><br />
    </div>
  )
}

export const renderEditableChip = (field, index) => {
  //<EditableChip onSave={this.savePreference} preference={field.preference} index={index}/>
  return (
    <div>
      chip here
      </div>
  )
}

const RenderAddButton = props => {
  return (
    <div>
      <FloatingActionButton mini={true} onTouchTap={props.onClick}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
}

export const renderFieldArray = fieldArray => {
  const defaultMeal = {name: "", seconds: 0};
  const addMeal = () => fieldArray.fields.push(defaultMeal);
  const addField = (field, index, fields) => {
    return (
      <li key={index}>
      <Field name={`${field}.chip`} type="text" component={renderEditableChip} />
        </li>
    )
  }
  return (
    <div>
      <RenderAddButton onClick={addMeal} />
      <ul>
        {fieldArray.fields.map(addField)}
        </ul>
    </div>
  )
}