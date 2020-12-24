import React from 'react';
import { styled } from 'linaria/react';
import PictureTemp from './styled';

const Modal = styled.div`
  width: 150px;
  /* height:300px; */
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: #c4c3fa;
  li {
    display: flex;
    padding-left: 25px;
    margin: 0 3px;
    align-items: center;
    background-color: white;
  }
`;

const PopUpMenu: React.FC = () => (
  <Modal>
    Account
    <li>
      <PictureTemp image="130px 378px" />
      Updates
    </li>
    <li>
      <PictureTemp image="355px 378px" />
      Messages
    </li>
    <li>
      <PictureTemp image="355px 315px" />
      Tasks
    </li>
    <li>
      <PictureTemp image="243px 190px" />
      Comments
    </li>
    Settings
    <li>
      <PictureTemp image="130px 378px" />
      Profile
    </li>
    <li>
      <PictureTemp image="355px 378px" />
      Settings
    </li>
    <li>
      <PictureTemp image="355px 315px" />
      Payments
    </li>
    <li>
      <PictureTemp image="243px 190px" />
      Projects
    </li>
  </Modal>
);

export default PopUpMenu;
