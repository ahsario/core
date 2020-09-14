import React from 'react';
import { styled } from 'linaria/react';
import BasicForm from './BasicForm';
import CompanyForm from './companyForm';
import CreditCardForm from './creditCardForm';
import HorizontalForm from './horizontalForm';

const Forms = styled.div`
  display: flex;
  justify-content:space-around;
  margin-bottom: 20px;
`;

const FormsPage = () => {
  return (
    <div>
      <Forms>
        <CreditCardForm />
        <CompanyForm />
      </Forms>
      <Forms>
        <BasicForm />
        <HorizontalForm />
      </Forms>
    </div>
  );
};
export default FormsPage;