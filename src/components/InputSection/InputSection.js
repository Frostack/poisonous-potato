import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

import { sendMessage } from '../../actions';
import styles from './InputSection.module.css';

const initialValues = {
  message: '',
};

function InputSection({ sendMessage, isVerified }) {
  const onSubmit = ({ message }, formikBag) => {
    if (!message.trim()) return;
    sendMessage(message);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.InputSection}>
        <Field
          name="message"
          placeholder="type something here..."
          autoFocus
          autoComplete="off"
          disabled={!isVerified}
        />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

const mapStateToProps = state => {
  return { isVerified: state.user.isVerified };
};

export default connect(mapStateToProps, { sendMessage })(InputSection);
