import React from 'react';
import { styled } from 'linaria/react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import BreadCrumbs from './breadCrumbs';
import FormsPage from './forms';
import ColorsPage from './colorsPage';
import ChartPage from './chart/index';

export interface IStyle {
  [key: string]: string;
}

const BodyDiv = styled.div`
  transition: margin-left .5s; /* If you want a transition effect */
  margin-left: ${(props: any):string => props.marginLeft};
`;

interface bodyProps{
  isOpen: {}
}

const Body: React.FC<bodyProps> = ({ isOpen }) => (
  <BodyDiv marginLeft={isOpen ? '250px' : '0'}>
    <Header />
    <BreadCrumbs />
    <Switch>
      <Route path="/forms" component={FormsPage} />
      <Route path="/colors" component={ColorsPage} />
      <Route path="/chart" component={ChartPage} />
    </Switch>
  </BodyDiv>
);

const mapStateToProps = (state: {}) => ({ isOpen: state });

export default connect(mapStateToProps)(Body);
