import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'linaria/react';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
  height: 40px;
  background-color: white;
  border-bottom: 2px solid #a0a0a0;
  box-shadow: 0 6px 4px -4px  #a0a0a0;
  color: grey;
  `;

const Left = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li{
    display: flex;
    padding-left: px;
    align-items: center;
    .passive{
    text-decoration:none;
    color:grey;
    }
  }
`;

const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li{
    display: flex;
    padding-right: 25px;
    align-items: flex-end;
  }
`;

const Picture = styled.div`
  width:30px;
  height:25px;
  background: ${props => props.image};
`;

const BreadCrumbs = () => {
  return (
    <Head>
      <Left>
        <li><NavLink className="passive" to="/"><b>Home /</b></NavLink></li>
      </Left>
      <Right>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 355px 378px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 469px 65px"
          />
          Dashboard
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 130px 440px"
          />
          Settings
        </li>
      </Right>
    </Head>
  );
};
export default BreadCrumbs;
