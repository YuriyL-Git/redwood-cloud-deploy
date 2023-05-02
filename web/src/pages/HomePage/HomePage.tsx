import { useEffect } from 'react';

import { navigate, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import { useAuth } from 'src/auth';
import ArticlesCell from 'src/components/ArticlesCell';

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.signup());
    }
  }, [isAuthenticated]);
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
      <button
        onClick={() => {
          fetch(
            'https://stage.redwoodtest.pp.ua:8911/serverTime/fdsfsdfsdffdsfsfsdfsfsdfsdfdsfsdfsdfdsfdsfsdfsfsfs'
          ).then((res) => {
            console.log(res);
          });
        }}
      >
        Test Api
      </button>
    </>
  );
};

export default HomePage;
