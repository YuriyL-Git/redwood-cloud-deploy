import { useState } from 'react';

import { Provider } from 'react-redux';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';
import store from 'src/store';

import { AuthProviderTypes } from '../../shared/types';

import { getProvider } from './auth/auth';

import './scaffold.css';

import './index.css';

const App = () => {
  const [currProviderType, setCurrProviderType] = useState<AuthProviderTypes>(
    AuthProviderTypes.Auth0
  );

  const { AuthProvider, useAuth } = getProvider(currProviderType);

  return (
    <Provider store={store}>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <AuthProvider>
            <RedwoodApolloProvider useAuth={useAuth}>
              <Routes
                useAuth={useAuth}
                setCurrProviderType={setCurrProviderType}
                currProviderType={currProviderType}
              />
            </RedwoodApolloProvider>
          </AuthProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </Provider>
  );
};

export default App;
