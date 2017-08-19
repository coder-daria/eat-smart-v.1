import TextField from 'material-ui/TextField';
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