import React from 'react';
import Forms from '../form';

const CreditCardForm = () => {
  return (
    <Forms
      formTittle="Credit Card "
      fieldNames={[
        { name: 'Name', type: 'text', value: 'Enter your name' },
        { name: 'Credit Card Number', type: 'number', value: '0000 0000 0000 0000' },
        { name: 'Month', type: 'month', value: '1' },
        { name: 'Year', type: 'year', value: '2017' },
        { name: 'CVV/CVC', type: 'number', value: '123' },
      ]}
    />
  );
};
export default CreditCardForm;
