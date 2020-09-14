import React from 'react';
import { styled } from 'linaria/react';
import ColorTemplate from './colorTemplate';

const Tittle = styled.div`
  margin:20px;
  background-color:white;  
  p{
    padding: 10px;
    color: grey;
    border-bottom: 2px solid #a0a0a0;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content:space-around;
`;

const ColorsPage = () => {
  return (
    <Tittle>
      <p>Theme colors</p>
      <Line>
        <ColorTemplate
          name="Primary"
          hex="#321fdb"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="Secondary"
          hex="#ced2d8"
          rgb="(26,210,216)"
        />
        <ColorTemplate
          name="Success"
          hex="#2eb85c"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="Danger"
          hex="#e55353"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="Primary"
          hex="#321fdb"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="Warning"
          hex="#f9b115"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="info"
          hex="#3399ff"
          rgb="(50,31,219)"
        />
      </Line>
      <Line>
        <ColorTemplate
          name="Light"
          hex="#ebedef"
          rgb="(50,31,219)"
        />
        <ColorTemplate
          name="Dark"
          hex="#636f83"
          rgb="(50,31,219)"
        />
      </Line>
    </Tittle>
  );
};
export default ColorsPage;
