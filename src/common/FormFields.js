import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EditableChip from './EditableChip';
import React from 'react';
import moment from 'moment';

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

export const renderTimePicker = field => {
  const onChange = (_null, date) => {
    let data = moment(date);
    let chosenUnixTimestamp = (moment(data).unix()) * 1000;

    if (date === null) {
      return;
    }
    field.input.onChange( chosenUnixTimestamp);

  }
  return (
    <div>
      <label>
        {field.label}
      </label>
      <div>
        <TimePicker format="24hr" hintText={field.label} value={new Date(field.input.value)} onChange={onChange} /><br />
      </div><br />
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
  const defaultMeal = { name: "", seconds: 0 };
  const addMeal = () => fieldArray.fields.push(defaultMeal);
  const addField = (field, index, fields) => {
    const removeField = () => fieldArray.fields.remove(index);
    return (
      <li key={index}>
        <EditableChip name={field} onDelete={removeField} preference={fields.get(index)} onSave={() => { }} />
      </li>
    )
  }
  return (
    <div>
      <ul>
        {fieldArray.fields.map(addField)}
      </ul>
      <RenderAddButton onClick={addMeal} />
    </div>
  )
}