import React from 'react';
import Forms from '../form';

const HorizontalForm = () => {
  return (
    <div>
      <Forms
        formTittle="Horizontal "
        fieldNames={[
          { name: 'Please enter your email', type: 'email', value: 'Enter Email' },
          { name: 'Please enter your password', type: 'password', value: 'Enter Password...' },
          { type: 'submit', value: 'Submit' },
          { type: 'reset', value: 'Reset' },
        ]}
      />
    </div>
  );
};
export default HorizontalForm;
