import * as process from 'process';

import { useEffect } from 'react';

import { navigate, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import { useAuth } from 'src/auth/auth';
import ArticlesCell from 'src/components/ArticlesCell';

import { AuthProviderTypes, Roles } from '../../../../shared/types';

const HomePage = () => {
  const { isAuthenticated, logOut, currentUser, loading, hasRole, getToken } =
    useAuth();

  useEffect(() => {
    console.log('Has role', hasRole(Roles.User));
    if (isAuthenticated && !loading) {
      setTimeout(async () => {
        const token = await getToken();
        fetch('/api/uploadFile', {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
            AuthType: AuthProviderTypes.Auth0,
          }),
        }).then((res) => {
          console.log('Res =', res);
        });
      });
    }
  }, [hasRole, isAuthenticated, loading]);

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
      <div
        style={{
          marginTop: '20px',
        }}
      >
        {isAuthenticated
          ? `User: ${currentUser.email}`
          : 'User is not logged in'}
      </div>
      <button onClick={() => logOut()}>Logout</button>
    </>
  );
};

export default HomePage;
