import React from 'react';
import { styled } from 'linaria/react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import BreadCrumbs from './breadCrumbs';
import FormsPage from './forms';
import ColorsPage from './colorsPage';
import ChartPage from './chart/index';

const BodyDiv = styled.div`
  transition: margin-left .5s; /* If you want a transition effect */
  margin-left: ${props => props.marginLeft};
`;

const Body = ({ isOpen }) => {
  return (
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
};

const mapStateToProps = (state) => {
  return {
    isOpen: state,
  }
};

export default connect(mapStateToProps)(Body);
