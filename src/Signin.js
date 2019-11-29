import React from 'react';
import { Formik, Field, ErrorMessage, Form} from 'formik';

const signin = () => {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 4400);
      }}>
        {(props) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{color: 'red'}}/>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={props.isSubmitting}>
              Submit
          </button>
          </Form>
        )}
      </Formik>
    </div>
  )
  
}

export default signin;