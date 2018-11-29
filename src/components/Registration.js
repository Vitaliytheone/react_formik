import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'reactstrap';
import Input from './Input';
import '../helpers/validations';

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(6, 'Login minimal length should be 6!')
    .required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .max(16, 'Password should be no longer 12 characters!')
    .required(),
  password_сonfirmation: Yup.string().equalTo(Yup.ref('password'), 'Password confirmation').required()
})

class Registration extends Component {
  onSubmit = ({ login, password }) => {
    const usersArray = JSON.parse(localStorage.getItem('users')) || [];
    usersArray.push({ login, password });
    localStorage.setItem('users', JSON.stringify(usersArray));
    this.props.changeTab();
  }

  render() {
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={this.onSubmit}
        initialValues={{
          login: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}
      >
        {
          ({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                  <Field name="login" component={Input} label="Login" placeholder="create a login name" required />
                  <Field name="email" component={Input} label="Email" placeholder="enter your email" required />
                  <Field name="password" component={Input} label="Password" type="password" placeholder="create a password" required />
                  <Field name="password_сonfirmation" component={Input} label="Confirm password" type="password" placeholder="confirm your password" />
                <Button type="submit">Submit</Button>
              </Form>
            );
          }
        }
      </Formik>
    );
  }
}

export default Registration;
