import React from 'react';
import Forms from '../form';

const CompanyForm = () => {
  return (
    <Forms
      formTittle="Company "
      fieldNames={[
        { name: 'Company', type: 'text', value: 'Enter your company name' },
        { name: 'VAT', type: 'number', value: 'DE1234567890' },
        { name: 'Street', type: 'text', value: 'Enter street name' },
        { name: 'City', type: 'text', value: 'Enter your city' },
        { name: 'Postal Code', type: 'number', value: 'Postal Code' },
        { name: 'Country', type: 'text', value: 'Country name' },
      ]}
    />
  );
};
export default CompanyForm;
