import { Context } from 'react';

import {
  Auth0Client,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from '@auth0/auth0-spa-js';

import { UseAuth, AuthContextInterface } from '@redwoodjs/auth';
import {
  LoginAttributes,
  ResetPasswordAttributes,
  SignupAttributes,
} from '@redwoodjs/auth-dbauth-web';
import WebAuthnClient from '@redwoodjs/auth-dbauth-web/webAuthn';

import { AuthTypes } from '../../shared/types';

export type HooksMap = Record<AuthTypes, UseAuth>;

export type ContextsMap = Record<AuthTypes, Auth0Context | DbAuthContext>;

export type Auth0Context = Context<
  AuthContextInterface<
    User,
    RedirectLoginOptions<any>,
    void,
    LogoutOptions,
    void,
    RedirectLoginOptions<any>,
    void,
    unknown,
    unknown,
    unknown,
    unknown,
    Auth0Client
  >
>;

export type DbAuthContext = Context<
  AuthContextInterface<
    string,
    LoginAttributes,
    any,
    unknown,
    boolean,
    SignupAttributes,
    any,
    any,
    ResetPasswordAttributes,
    any,
    any,
    WebAuthnClient
  >
>;
