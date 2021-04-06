import React from 'react';
import { GlobalStyle } from 'styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
              <Route path="/dashboard/:id?">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
