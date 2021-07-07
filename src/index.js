import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import 'assets/fonts/fonts.css';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AppProviders';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
