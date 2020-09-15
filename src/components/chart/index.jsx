import React from 'react';
import { styled } from 'linaria/react';
import SimpleChartComponent from './chart';

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  height: auto;
`;

const Picture = styled.div`
  flex-grow: 1;
  padding-left: 10px;
  flex-basis:150px;
  height: 130px;
  background: ${(props) => props.image};
`;

const ChartPage = () => {
  const renderPictures = (num) => (<Picture image={`url(../../../src/image/img${num}.png)`} no-repeat />);

  return (
    <div>
      <Images>
        {[1, 2, 3, 4].map(renderPictures)}
      </Images>
      <SimpleChartComponent />
      <Images>
        {[5, 6, 7, 8].map(renderPictures)}
      </Images>
    </div>
  );
};
export default ChartPage;
