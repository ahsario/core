import React from 'react';
import { styled } from 'linaria/react';


export interface IStyle {
  [key: string]: string;
}

export const PictureTemps = styled.div<IStyle>`
  width: 30px;
  height: 25px;
  background-image: url('../../../src/sprite.png');
  background-position: ${(props) => props.image};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: white;
  border-bottom: 2px solid #a0a0a0;
  color: grey;
  .bread {
    margin-bottom: 20px;
    box-shadow: 0 6px 4px -4px  #a0a0a0;
  }
  `;

export const LeftMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li {
    display: flex;
    padding-left: 25px;
    align-items: center;
    .passive {
    text-decoration: none;
    color: grey;
    }
    .home {
      font-weight: bold;
    }
  }
`;

export const RightMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    display: flex;
    padding-right: 25px;
    align-items: flex-end;
    .passive {
    text-decoration: none;
    color: grey;
    }
  }
`;

export type PictureTempProps = {
  image: string;
}

const PictureTemp: React.FC<PictureTempProps> = ({ image }) => <PictureTemps image={image} />;
export default PictureTemp;
