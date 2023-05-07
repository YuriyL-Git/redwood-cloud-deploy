import { useEffect } from 'react';

import { MetaTags } from '@redwoodjs/web';

import { useAuth } from 'src/auth';
import ArticlesCell from 'src/components/ArticlesCell';

import { Roles } from '../../../../shared/types';

const HomePage = () => {
  const { isAuthenticated, logOut, currentUser, loading, hasRole } = useAuth();

  console.log('currentUser', currentUser);
  useEffect(() => {
    console.log('Has role', hasRole(Roles.User));
    if (isAuthenticated && !loading) {
      fetch('/api/uploadFile').then((res) => {
        res.json().then((res) => console.log('Res =', res));
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
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default HomePage;
