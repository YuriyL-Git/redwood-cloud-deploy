import { MetaTags } from '@redwoodjs/web';

import ArticlesCell from 'src/components/ArticlesCell';

const HomePage = () => {
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
