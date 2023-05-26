import { useContext } from 'react';

import { RedirectLoginOptions } from '@auth0/auth0-spa-js';

import { LoginAttributes, SignupAttributes } from '@redwoodjs/auth-dbauth-web';

import { Auth0Context } from 'src/auth/auht0';
import { DbAuthContext } from 'src/auth/dbAuth';
import { useAppDispatch, useTypedSelector } from 'src/store';
import { setAuthType } from 'src/store/slices/auth';

import { AuthTypes } from '../../../shared/types';

export const useAuthFuncs = (authType: AuthTypes) => {
  const dispatch = useAppDispatch();

  if (authType === AuthTypes.DbAuth) {
    const context = useContext(DbAuthContext);
    const { logIn, signUp, ...rest } = context;

    const patchedLogin = (options?: LoginAttributes) => {
      dispatch(setAuthType(AuthTypes.DbAuth));
      return logIn(options);
    };

    const patchedSignUp = (options?: SignupAttributes) => {
      dispatch(setAuthType(AuthTypes.DbAuth));
      return signUp(options);
    };

    return {
      ...rest,
      signUp: patchedSignUp,
      logIn: patchedLogin,
    };
  }

  if (authType === AuthTypes.Auth0) {
    const context = useContext(Auth0Context);
    const { logIn, signUp, ...rest } = context;

    const patchedLogin = (options?: RedirectLoginOptions<any>) => {
      dispatch(setAuthType(AuthTypes.Auth0));
      return logIn(options);
    };

    const patchedSignUp = (options?: RedirectLoginOptions<any>) => {
      dispatch(setAuthType(AuthTypes.Auth0));
      return signUp(options);
    };

    return {
      ...rest,
      signUp: patchedSignUp,
      logIn: patchedLogin,
    };
  }

  /*  const authContext = contextsMap[authType];
  // @ts-ignore
  const context = useContext(authContext);

  const {} = context;
  //const {} = context;
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;*/
};

const authTypesList: Array<AuthTypes> = [AuthTypes.DbAuth, AuthTypes.Auth0];

export const useAuth = () => {
  /*  // const { authType } = useTypedSelector((state) => state.auth);
  const auth0 = useTypedAuth(AuthTypes.Auth0);
  const dbAuth = useTypedAuth(AuthTypes.DbAuth);*/

  const { authType } = useTypedSelector((state) => state.auth);

  const authx = authTypesList.map((authType) => useAuthFuncs(authType));
  const result = authx.find((auth) => auth.isAuthenticated);

  return result || useAuthFuncs(authType);
};
