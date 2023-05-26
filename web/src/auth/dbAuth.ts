import {
  createDbAuthClient,
  createAuth as createDbAuth,
} from '@redwoodjs/auth-dbauth-web';

const dbAuthClient = createDbAuthClient();
const { AuthProvider, useAuth, AuthContext } = createDbAuth(dbAuthClient);

export {
  AuthProvider as DbAuthProvider,
  useAuth as useDbAuth,
  AuthContext as DbAuthContext,
};

/*
export const getProvider = (providerType: AuthProviderTypes) => {
  return providers.find((provider) => provider.providerType === providerType)
    .provider;
};
*/

//export const { AuthProvider, useAuth } = getProvider(AuthProviderTypes.Auth0);
//export const { AuthProvider, useAuth } = getProvider(AuthProviderTypes.Auth0);
/*
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
};*/
