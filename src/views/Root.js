import React from 'react';
import { useForm } from 'react-hook-form';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useAuth } from 'hooks/useAuth';
import Dashboard from './Dashborad/Dashboard';
import Notes from './Notes/Notes';
import FormField from 'components/molecules/FormField/FormField';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { Button } from 'components/atoms/Button/Button';
import { useError } from 'hooks/useError';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const styledForm = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <form style={styledForm} onSubmit={handleSubmit(auth.signIn)}>
      <FormField id="login" label="login" defaultValue="teacher@studybuddy.com" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField id="password" label="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign In</Button>
      {/* {loginError && <span>{loginError}</span>} */}
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
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
