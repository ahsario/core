import React from 'react';
import { NavLink } from 'react-router-dom';
import PictureTemp, { Head, LeftMenu, RightMenu } from './styled';

const BreadCrumbs = () => (
  <Head className="bread">
    <LeftMenu>
      <li><NavLink className="passive" to="/"><div className="home">Home /</div></NavLink></li>
    </LeftMenu>
    <RightMenu>
      <li>
        <PictureTemp image="355px 378px" />
      </li>
      <li>
        <PictureTemp image="469px 65px" />
        <NavLink className="passive" to="/chart">Dashboard</NavLink>
      </li>
      <li>
        <PictureTemp image="130px 440px" />
        Settings
      </li>
    </RightMenu>
  </Head>
);
export default BreadCrumbs;
