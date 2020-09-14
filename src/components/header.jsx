import React from 'react';
import { connect } from 'react-redux';
import { styled } from 'linaria/react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PopUpMenu from './popUp';
import * as actions from '../actions';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: white;
  border-bottom: 2px solid #a0a0a0;
  color: grey;
  `;

const Left = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li{
    display: flex;
    padding-left: 25px;
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
    text-decoration: none;
  
  }
  
`;

const Picture = styled.div`
  width:30px;
  height:25px;
  background-image: url('../../../src/sprite.png');
  background-position: ${(props) => props.image};
`;

const Hamburger = styled.div`
  width:30px;
  height:20px;
  background: url('../../../src/gamb.png') no-repeat ;
  background-size: contain;
`;

const Header = ({ tog }) => (
  <Head>
    <Left>
      <Hamburger
        onClick={tog}
      />
      <li><NavLink className="passive" to="/chart">Dashboard</NavLink></li>
      <li>Users</li>
      <li>Settings</li>
    </Left>
    <Right>
      <li>
        <Picture
          image="130px 378px"
        />
      </li>
      <li>
        <Picture
          image="355px 378px"
        />
      </li>
      <li>
        <Picture
          image="355px 315px"
        />
      </li>
      <li>
        <Picture
          image="243px 190px"
        />
      </li>
      <li>
        <Popup
          trigger={
            (
              <Picture
                image="469px 440px"
              />
            )
          }
          position="bottom center"
        >
          <PopUpMenu />
        </Popup>
      </li>
      <li>
        <Picture
          image="130px 128px"
        />
      </li>
    </Right>
  </Head>
);

const mapStateToProps = (state) => ({ isOpen: state });

export default connect(mapStateToProps, actions)(Header);
