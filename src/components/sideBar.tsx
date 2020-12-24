import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'linaria/react';
import { connect } from 'react-redux';

const Menu = styled.div`
  height: 100%;
  width: ${(props: any) => props.width};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #636f83;
  overflow: scroll;
  padding-top: 60px; 
  transition: 0.5s;
  color: white;
   li {
    display: flex;
    padding: 8px 0px 8px 0px;
    font-size: 25px;
    color: #818181;
    transition: 0.3s;
    .passive {
      width:100%;
      text-decoration: none;
      color:#818181;
    }
    .active {
      text-decoration: none;
      background-color: #321fdb;
    }
  }
  p {
      padding-left: 8px;
      margin-top: 50px;
      font-size: 25px;
      color: white;
    }
  li:hover {
    color: #f1f1f1;
  }
`;

interface SideProps{
  isOpen: {}
}

const SideBar: React.FC<SideProps> = ({ isOpen }) => (
  <Menu width={isOpen ? '250px' : '0'}>
    <li>
      <NavLink className="passive" activeClassName="active" to="/chart"><li>Dashboard</li></NavLink>
    </li>
    <p>THEME</p>
    <li>
      <NavLink className="passive" activeClassName="active" to="/colors"><li>Colors</li></NavLink>
    </li>
    <li>Typography</li>
    <p>COMPONENTS</p>
    <li>Base</li>
    <li>Buttons</li>
    <li>Charts</li>
    <li>Editors</li>
    <li>
      <NavLink className="passive" activeClassName="active" to="/forms"><li>Forms</li></NavLink>
    </li>
    <li>Google Maps</li>
    <li>Icons</li>
    <li>Notifications</li>
    <li>Plugins</li>
    <li>Tables</li>
    <li>Widjets</li>
    <p>EXTRAS</p>
  </Menu>
);

const mapStateToProps = (state: {}) => ({ isOpen: state });

export default connect(mapStateToProps)(SideBar);
