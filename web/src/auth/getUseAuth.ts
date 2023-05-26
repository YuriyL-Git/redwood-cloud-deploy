import { useContext } from 'react';

import { HooksMap } from 'types/types';

import { Auth0Context, useAuth0 } from 'src/auth/auht0';
import { useDbAuth } from 'src/auth/dbAuth';

/*
const hooksMap: HooksMap = {
  Auth0: useContext(Auth0Context),
  DbAuth: useContext(Auth0Context),
};
*/

export const p = 5;
