import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyle';
import { theme } from 'styles/theme';
import { AuthProvider } from '../hooks/useAuth';
import { ErrorProvider } from '../hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <ErrorProvider>
              <AuthProvider>
                <GlobalStyle />
                {children}
              </AuthProvider>
            </ErrorProvider>
          </ThemeProvider>
        </Router>
      </Provider>
    </>
  );
};

export default AppProviders;
