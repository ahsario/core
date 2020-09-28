import React from 'react';
import { styled } from 'linaria/react';

const Color = styled.div`
  width: 150px;
  background-color: white;
  div {
    width: 100px;
    height: 100px;
    background-color: ${(props: Partial<ColorProps>): string => props.color!};
  }
  p {
    border-bottom: 2px solid #a0a0a0;
  }
  h4 {
    display: inline;
    color: lightgray;
  }
`;
interface ColorProps {
  color: string
}
interface TempleProps {
  name: string,
  hex: string,
  rgb: string
}

const colorTemplate: React.FC<TempleProps> = ({ name, hex, rgb }) => (
  <Color color={hex}>
    <div />
    <p>
      Brand
      {name}
      color
    </p>
    <p>
      <h4>HEX </h4>
      {hex}
    </p>
    <p>
      <h4>RGB </h4>
      rgb
      {rgb}
    </p>
  </Color>
);

export default colorTemplate;
