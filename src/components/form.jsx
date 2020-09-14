import React from 'react';
import { styled } from 'linaria/react';
import Fields from './field';

const FormTemplate = styled.div`
  flex-grow: 0;
  width:600px;
  color: grey;
  vertical-align: middle;

  background-color: white;
  p{
    border-bottom: 2px solid #a0a0a0;
    padding:10px;
  };
  label{
    margin-left:10px;
  }
  input{
    border: 2px solid #a0a0a0;
    width: 93%;
    margin: 10px;
    color: grey;
  };
  input[type=submit]{
    display: inline;
    width: 60px;
    background-color: blue;
    color: white;
  }
  input[type=reset]{
    display: inline;
    width: 60px;
    background-color: red;
    color: white;
  }
`;

const Forms = ({ formTittle, fieldNames }) => {
  return (
    <FormTemplate>
      <p>
        <b>{formTittle}</b>
        Form
      </p>
      <Fields fieldNames={fieldNames} />
    </FormTemplate>
  );
};
export default Forms;
