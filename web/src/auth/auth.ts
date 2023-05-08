import { LogoutOptions } from '@auth0/auth0-spa-js';

import {
  createDbAuthClient,
  createAuth as createDbAuth,
} from '@redwoodjs/auth-dbauth-web';

import { auth0Provider } from 'src/auth/auht0';
import { useTypedSelector } from 'src/store';

import { AllowedRoles, AuthProviderTypes } from '../../../shared/types';

const dbAuthClient = createDbAuthClient();
const dbAuth = createDbAuth(dbAuthClient);

export const providers = [
  {
    providerType: AuthProviderTypes.DbAuth,
    provider: dbAuth,
  },
  {
    providerType: AuthProviderTypes.Auth0,
    provider: auth0Provider,
  },
];

export const getProvider = (providerType: AuthProviderTypes) => {
  return providers.find((provider) => provider.providerType === providerType)
    .provider;
};

//export const { AuthProvider, useAuth } = getProvider(AuthProviderTypes.Auth0);
//export const { AuthProvider, useAuth } = getProvider(AuthProviderTypes.Auth0);

export const useAuth = () => {
  const { currProviderType } = useTypedSelector((state) => state.auth);
  const AuthProvider = getProvider(currProviderType);
  const { hasRole, logOut, ...authProps } = AuthProvider.useAuth();

  const hasRoleWithType = (roles: AllowedRoles) => {
    return hasRole(roles);
  };
  console.log('AUTH PROVIDER');
  const logOutPatched = async () => {
    const options = {
      logoutParams: {
        returnTo: window.location.origin,
      },
    };

    await logOut(options);
  };

  return {
    ...authProps,
    hasRole: hasRoleWithType,
    logOut: logOutPatched,
  };
};
