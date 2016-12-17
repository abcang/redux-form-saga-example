import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import {submitForm} from '../actions';

function submit(value, dispatch) {
  dispatch(submitForm(value));
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <div>{error}</div>}
    </div>
  </div>
);
renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object,
};

const Form = (props) => {
  const { handleSubmit, submitting, pristine, reset, error } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password" />
      {error && <div><strong>{error}</strong></div>}
      {submitting && <div><strong>submitting</strong></div>}
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default reduxForm({form: 'example'})(Form);
