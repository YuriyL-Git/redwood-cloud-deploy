import { useContext, useState } from 'react';

import { Provider } from 'react-redux';
import { HooksMap } from 'types/types';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import { Auth0Context, useAuth0 } from 'src/auth/auht0';
import { AuthProviders } from 'src/auth/AuthProviders';
import { DbAuthContext, useDbAuth } from 'src/auth/dbAuth';
import { useAuth } from 'src/auth/useAuth';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';
import store from 'src/store';

import { AuthTypes } from '../../shared/types';

import './scaffold.css';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <AuthProviders>
            <RedwoodApolloProvider useAuth={useAuth}>
              <Routes />
            </RedwoodApolloProvider>
          </AuthProviders>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </Provider>
  );
};

export default App;
