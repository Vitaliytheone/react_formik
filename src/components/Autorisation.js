import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'reactstrap';
import Input from './Input';
import '../helpers/validations';

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(6, 'Login minimal length should be 6!')
    .required('Login is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!')
})

class Autorisation extends Component {
  onSubmit = ({ login, password }, actions) => {
    const usersString = localStorage.getItem('users');
    const users = JSON.parse(usersString) || [];
    if (users.find(user => user.login === login && user.password === password)) {
      this.props.login();
    } else {
      actions.setSubmitting(false);
      actions.setErrors( { formError: 'Wrong login or password' } );
    }
  }

  render() {
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={this.onSubmit}
        initialValues={{
          login: '',
          password: ''
        }}
      >
        {
          ({ handleSubmit, errors }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {errors.formError}
                  <Field name="login" component={Input} label="Login" placeholder="enter your login name" />
                  <Field name="password" component={Input} label="Password" placeholder="enter your password" />
                <Button type="submit">Submit</Button>
              </Form>
            );
          }
        }
      </Formik>
    );
  }
}

export default Autorisation;
