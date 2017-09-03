import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EditableChip from '../EditableChip';
import React from 'react';
import moment from 'moment';
import { Field } from 'redux-form';
import SelectField from 'material-ui/SelectField';
import '../../features/preferences/preferencesForm.css';
import Checkbox from 'material-ui/Checkbox';

export const renderTextField = field => {
  const errorText = field.meta.touched ? field.meta.error : null;
  return (
    <div className={field.className}>
      <TextField
        floatingLabelText={field.label}
        floatingLabelFixed={true}
        {...field.input}
        style={{ width: '9em' }}
        type={field.type}
        errorText={errorText}
        autoComplete="off"
      />
    </div>
  );
};

export const renderCheckbox = field => {
  return (
    <Checkbox
      defaultChecked={field.input.value}
      label={field.label}
      onCheck={(e, checked) => field.input.onChange(checked)}
    />
  );
};

export const renderDiv = string => <div>{string}</div>;

export const renderTimePicker = field => {
  const onChange = (_null, date) => {
    let data = moment(date);
    let chosenUnixTimestamp = moment(data).unix() * 1000;

    if (date === null) {
      return;
    }
    field.input.onChange(chosenUnixTimestamp);
  };
  return (
    <div className="form-timePicker">
      <TimePicker
        format="24hr"
        floatingLabelText={field.label}
        hintText={field.label}
        name={field.input.name}
        value={new Date(field.input.value)}
        onChange={onChange}
        className="importantChange"
      />
    </div>
  );
};

const RenderAddButton = props => {
  return (
    <div>
      <FloatingActionButton mini={true} onTouchTap={props.onClick}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

const renderField = (field, index, fields) => {
  const remove = () => fields.remove(index);
  const updateTime = () => {
    let chosenUnixTimestamp = moment(fields.get(index).seconds).unix() * 1000;
    return moment(chosenUnixTimestamp).format('HH:mm');
  };
  const chipFields = (
    <div className="chipContentContainer">
      <div>
        <Field
          name={`${field}.seconds`}
          component={() => renderDiv(updateTime())}
        />
      </div>
      <div>
        <Field
          name={`${field}.name`}
          component={() => renderDiv(fields.get(index).name)}
        />
      </div>
    </div>
  );

  const formFields = (
    <div className="formContentContainer">
      <div className="form-name-time">
        <Field
          name={`${field}.name`}
          component={renderTextField}
          label="Name"
        />
      </div>
      <div className="form-time">
        <Field
          name={`${field}.seconds`}
          component={renderTimePicker}
          label="Time"
        />
      </div>
    </div>
  );

  return (
    <li key={index} className="chipItem">
      <EditableChip
        initiallyOpen={fields.get(index).isNew}
        onDelete={remove}
        chipFields={chipFields}
        formFields={formFields}
      />
    </li>
  );
};
export const renderFieldArray = fieldArray => {
  const defaultMeal = { name: '', seconds: 0, isNew: true };
  const addMeal = () => fieldArray.fields.push(defaultMeal);

  return (
    <div className="preferencesAndAddButtonContainer">
      <div>
        <ul className="fieldsContainer">
          {fieldArray.fields.map(renderField)}
        </ul>
      </div>
      <div className="preferencesAddButton">
        <RenderAddButton onClick={addMeal} />
      </div>
    </div>
  );
};

export const renderSelectField = field => {
  return (
    <div className={field.className}>
      <SelectField
        floatingLabelText={field.label}
        {...field.input}
        children={field.children}
        onChange={(event, index, value) => field.input.onChange(value)}
      />
    </div>
  );
};
