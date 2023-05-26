import { Auth0Provider } from 'src/auth/auht0';
import { DbAuthProvider } from 'src/auth/dbAuth';

export const AuthProviders = ({ children }) => {
  return (
    <Auth0Provider>
      <DbAuthProvider>{children}</DbAuthProvider>
    </Auth0Provider>
  );
};
