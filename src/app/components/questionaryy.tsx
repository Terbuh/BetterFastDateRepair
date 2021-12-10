import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import FormikField from '../FormikField';
import FormikSelect, { FormikSelectItem } from '../FormikSelect';

interface Values {
  firstName: string;
  year: number;
  email: string;
  VIN: string;
  carModel: string;
  engineCapacity: number;
}

const initialValues: Values = {
  firstName: '',
  year: 0,
  email: '',
  VIN: '',
  carModel: '',
  engineCapacity: 0
};

const FormQuestionary: React.FC = () => {
  const handleSubmit = (values: Values): any => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}>
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="name" label="Name" required />
              <FormikSelect
                name="position"
                items={positionItems}
                label="Position"
                required
              />

              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit">
                Primary
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
