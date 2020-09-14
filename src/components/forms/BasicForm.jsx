import React from 'react';
import Forms from '../form';

const BasicForm = () => {
  return (
    <Forms
      formTittle="Basic "
      fieldNames={[
        { name: 'Username', type: 'text', value: 'Enter your company username' },
        { name: 'This is a help text', type: 'text', value: 'text' },
        { name: 'Please enter your email', type: 'email', value: 'Enter Email' },
        { name: 'Password', type: 'password', value: 'password' },
      ]}
    />
  );
};
export default BasicForm;
