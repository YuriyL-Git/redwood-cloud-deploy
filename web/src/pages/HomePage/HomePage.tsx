import { useEffect } from 'react';

import { navigate, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import { useAuth } from 'src/auth';
import ArticlesCell from 'src/components/ArticlesCell';

const HomePage = () => {
  const { isAuthenticated, logOut, currentUser, loading } = useAuth();

  useEffect(() => {
    fetch('/api/uploadFile').then((res) => {
      res.json().then((res) => console.log('Res =', res));
    });
    if (!isAuthenticated && !loading) {
      navigate(routes.login());
    }
  }, [isAuthenticated, loading]);

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
