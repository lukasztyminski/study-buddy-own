import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/globalStyle';
import { theme } from 'styles/theme';
import { AuthProvider } from '../hooks/useAuth';
import { ErrorProvider } from '../hooks/useError';
import { SEO } from 'components/organisms/SEO/SEO';

const AppProviders = ({ children }) => {
  return (
    <>
      <SEO />
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
    </>
  );
};

export default AppProviders;
