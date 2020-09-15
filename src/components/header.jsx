import React from 'react';
import { connect } from 'react-redux';
import { styled } from 'linaria/react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PopUpMenu from './popUp';
import PictureTemp, { Head, LeftMenu, RightMenu } from './styled';
import * as actions from '../actions';

const Hamburger = styled.div`
  width: 30px;
  height: 20px;
  background: url('../../../src/gamb.png') no-repeat ;
  background-size: contain;
`;

export const menuItem = (pos) => (
  <li>
    <PictureTemp
      image={pos}
    />
  </li>
);

const Header = ({ tog }) => (
  <Head>
    <LeftMenu>
      <Hamburger
        onClick={tog}
      />
      <li><NavLink className="passive" to="/chart">Dashboard</NavLink></li>
      <li>Users</li>
      <li>Settings</li>
    </LeftMenu>
    <RightMenu>
      {menuItem('130px 378px')}
      {menuItem('355px 378px')}
      {menuItem('355px 315px')}
      {menuItem('243px 190px')}
      <li>
        <Popup
          trigger={menuItem('469px 440px')}
          position="bottom center"
        >
          <PopUpMenu />
        </Popup>
      </li>
      {menuItem('130px 128px')}
    </RightMenu>
  </Head>
);

const mapStateToProps = (state) => ({ isOpen: state });

export default connect(mapStateToProps, actions)(Header);
