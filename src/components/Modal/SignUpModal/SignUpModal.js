import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';

import styles from '../Modal.module.css';
import { closeModal, signUpUser } from '../../../actions';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('email is required'),
  username: Yup.string().min(4).max(50).required('username is required'),
  password: Yup.string().min(7).max(50).required('password is required'),
});

const initialValues = {
  email: '',
  username: '',
  password: '',
};

function SignUpModal({ closeModal, signUpUser }) {
  const onSubmit = values => {
    signUpUser(values);
    closeModal();
  };

  return (
    <Formik validationSchema={SignUpSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <Field
            autoFocus
            autoComplete="off"
            name="email"
            placeholder="email"
            className={errors.email && touched.email ? styles.error : null}
          />
          {errors.email && touched.email ? (
            <span className={styles.errorText}>{errors.email}</span>
          ) : null}

          <Field
            autoComplete="off"
            name="username"
            placeholder="username"
            className={errors.username && touched.username ? styles.error : null}
          />
          {errors.username && touched.username ? (
            <span className={styles.errorText}>{errors.username}</span>
          ) : null}

          <Field
            autoComplete="off"
            name="password"
            placeholder="password"
            type="password"
            className={errors.password && touched.password ? styles.error : null}
          />
          {errors.password && touched.password ? (
            <span className={styles.errorText}>{errors.password}</span>
          ) : null}

          <button type="submit" disabled={!_.isEmpty(errors) || !touched.email}>
            Join us
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default connect(null, {
  closeModal,
  signUpUser,
})(SignUpModal);
