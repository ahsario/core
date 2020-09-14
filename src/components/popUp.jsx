import React from 'react';
import { styled } from 'linaria/react';

const Modal = styled.div`
  width: 150px;
  /* height:300px; */
  padding:10px;
  text-align: center;
  border-radius:10px;
  background-color:#c4c3fa;
  li{
    display: flex;
    padding-left: 25px;
    margin:0 3px;
    align-items: center;
    background-color:white;
  }
`;

const Picture = styled.div`
  width:30px;
  height:25px;
  background-image: url('../../../src/sprite.png');
  background-position: ${(props) => props.image};
`;

const PopUpMenu = () => (
  <Modal>
    Account
    <li>
      <Picture image="130px 378px" />
      Updates
    </li>
    <li>
      <Picture image="355px 378px" />
      Messages
    </li>
    <li>
      <Picture image="355px 315px" />
      Tasks
    </li>
    <li>
      <Picture image="243px 190px" />
      Comments
    </li>
    Settings
    <li>
      <Picture image="130px 378px" />
      Profile
    </li>
    <li>
      <Picture image="355px 378px" />
      Settings
    </li>
    <li>
      <Picture image="355px 315px" />
      Payments
    </li>
    <li>
      <Picture image="243px 190px" />
      Projects
    </li>
  </Modal>
);

export default PopUpMenu;
