import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EditableChip from '../EditableChip';
import React from 'react';
import moment from 'moment';
import SelectField from 'material-ui/SelectField';
import '../../features/preferences/preferencesParent.css';

export const renderTextField = field => {
  const errorText = field.meta.touched ? field.meta.error : null;
  return (
    <div className="textFieldContainer">
      <div className={field.className}>
        <TextField floatingLabelText={field.label} floatingLabelFixed={true} {...field.input} type={field.type} errorText={errorText} autoComplete="off" />
      </div>
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
    field.input.onChange(chosenUnixTimestamp);

  }
  return (
    <div>
      <label>
        {field.label}
      </label>
      <div>
        <TimePicker format="24hr" hintText={field.label} name={field.input.name} value={new Date(field.input.value)} onChange={onChange} /><br />
      </div>
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
  const defaultMeal = { name: "meal", seconds: 0 };
  const addMeal = () => fieldArray.fields.push(defaultMeal);
  
  const addField = (field, index, fields) => {
    const remove = () => fieldArray.fields.remove(index);
    return (
      <li key={index} className="chip">
        <EditableChip
          field={field}
          index={index}
          fields={fields}
          onDelete={remove}
        />
      </li>
    )
  }
  return (
    <div className="fieldsAndButtonContainer">
      <div className="array">
        <ul className="fieldsContainer">
          {fieldArray.fields.map(addField)}
        </ul>
      </div>
      <div className="button" >
        <RenderAddButton onClick={addMeal}/>
      </div>
    </div>
  )
}

export const renderSelectField = field => {
  return (
      <div className={field.className}>
          <SelectField
              floatingLabelText={field.label}
              {...field.input}
              children={field.children}
              onChange={(event, index, value) => field.input.onChange(value)} />
      </div>
  )
}
