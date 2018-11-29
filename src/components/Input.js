import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';

const FormikInput = ({ field, form: { touched, errors }, label, ...props}) => (
  <FormGroup>
    <Label htmlFor={field.name}>{label}</Label>
      <Input {...field} {...props} className={touched[field.name] && errors[field.name] && 'is-invalid' } />
      {touched[field.name] &&
        errors[field.name] && <div className="invalid-feedback error">{errors[field.name]}</div>
      }
  </FormGroup>
);

export default FormikInput;
