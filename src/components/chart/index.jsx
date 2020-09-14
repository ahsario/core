import React from 'react';
import { styled } from 'linaria/react';
import SimpleChartComponent from './chart';

const Images = styled.div`
  display: flex;
  justify-content:space-between;
  margin:auto;
  width:90%;
  height:auto;
`;

const Picture = styled.div`
  flex-grow: 1;
  padding-left:10px;
  flex-basis:150px;
  height:130px;
  background: ${props => props.image};
`;

const ChartPage = () => {
  return (
    <div>
      <Images>
        <Picture image="url('../../../src/image/img1.png') no-repeat" />
        <Picture image="url('../../../src/image/img2.png') no-repeat" />
        <Picture image="url('../../../src/image/img3.png') no-repeat" />
        <Picture image="url('../../../src/image/img4.png') no-repeat" />
      </Images>
      <SimpleChartComponent />
      <Images>
        <Picture image="url('../../../src/image/img5.png') no-repeat" />
        <Picture image="url('../../../src/image/img6.png') no-repeat" />
        <Picture image="url('../../../src/image/img7.png') no-repeat" />
        <Picture image="url('../../../src/image/img8.png') no-repeat" />
      </Images>
    </div>
  );
};
export default ChartPage;
