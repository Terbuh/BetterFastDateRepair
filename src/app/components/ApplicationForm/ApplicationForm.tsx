import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';

import FormikField from '../FormikField';
import FormikSelect, { FormikSelectItem } from '../FormikSelect';

import './App.css';

interface FormValues {
  name: string;
  email: string;
  position: string;
  carModel: string;
  year: number;
  engineCapacity: number;
  VIN: string;
}

const initialValues: FormValues = {
  name: '',
  position: '',
  email: '',
  carModel: '',
  year: 0,
  engineCapacity: 0,
  VIN: ''
};

const positionItems: FormikSelectItem[] = [
  {
    label: 'Change Oil',
    value: 'change_oil'
  },
  {
    label: 'Diagnosis',
    value: 'diagnosis'
  },
  {
    label: 'Change Tire',
    value: 'change_tire'
  },
  {
    label: 'Change Bulb',
    value: 'change_bulb'
  }
];

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  position: Yup.string().required('Required')
});

const ApplicationForm: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
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
              <FormikField name="email" label="Email" required />
              <FormikField name="carModel" label="Car Model" required />
              <FormikField name="year" label="Year" required />
              <FormikField
                name="engineCapacity"
                label="Engine Capacity"
                required
              />
              <FormikField name="VIN" label="VIN" required />

              <FormikSelect
                name="position"
                items={positionItems}
                label="Choose Repair"
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

export default ApplicationForm;
