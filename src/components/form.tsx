import React from 'react';
import { styled } from 'linaria/react';
import RenderItems from './field';

const FormTemplate = styled.div`
  flex-grow: 0;
  margin-top: 25px;
  width: 600px;
  color: grey;
  vertical-align: middle;

  background-color: white;
  p {
    border-bottom: 2px solid #a0a0a0;
    padding: 10px;
  };
  label {
    margin-left: 10px;
  }
  input {
    border: 2px solid #a0a0a0;
    width: 93%;
    margin: 10px;
    color: grey;
  };
  input[type=submit] {
    display: inline;
    background-color: blue;
    color: white;
  }
  input[type=reset] {
    display: inline;
    background-color: red;
    color: white;
  }
`;

interface FormsProps{
  formTittle: string,
  fieldNames: any
}

const Forms: React.FC<FormsProps> = ({ formTittle, fieldNames }) => (
  <FormTemplate>
    <p>
      <b>{formTittle}</b>
      Form
    </p>
    <RenderItems fieldNames={fieldNames} />
  </FormTemplate>
);

export default Forms;
