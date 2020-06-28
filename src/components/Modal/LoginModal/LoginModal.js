import * as Yup from 'yup';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { closeModal, loginUser } from '../../../actions';
import styles from '../Modal.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('email is required'),
  password: Yup.string().min(7).max(50).required('password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

function LoginModal({ closeModal, loginUser }) {
  const onSubmit = values => {
    loginUser(values);
    closeModal();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <Field
            name="email"
            placeholder="email"
            autoFocus
            autoComplete="off"
            className={errors.email && touched.email ? styles.error : null}
          />
          {errors.email && touched.email ? (
            <span className={styles.errorText}>{errors.email}</span>
          ) : null}

          <Field
            name="password"
            placeholder="password"
            type="password"
            autoComplete="off"
            className={errors.password && touched.password ? styles.error : null}
          />
          {errors.password && touched.password ? (
            <span className={styles.errorText}>{errors.password}</span>
          ) : null}

          <button type="submit" disabled={!_.isEmpty(errors) || !touched.email}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default connect(null, { closeModal, loginUser })(LoginModal);
