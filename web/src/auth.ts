import { createDbAuthClient, createAuth } from '@redwoodjs/auth-dbauth-web';

import { AllowedRoles } from '../../shared/types';

const dbAuthClient = createDbAuthClient();

// export const { AuthProvider, useAuth as authHook } = createAuth(dbAuthClient);
const auth = createAuth(dbAuthClient);

export const { AuthProvider } = auth;

export const useAuth = () => {
  const { hasRole, ...authProps } = auth.useAuth();

  const hasRoleWithType = (roles: AllowedRoles) => {
    return hasRole(roles);
  };

  return {
    ...authProps,
    hasRole: hasRoleWithType,
  };
};
