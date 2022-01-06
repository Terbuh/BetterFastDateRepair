import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

import FormikDiv from './formikField.style';

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  type = 'text',
  required = false
}) => {
  return (
    <FormikDiv>
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </FormikDiv>
  );
};

export default FormikField;
