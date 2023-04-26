import React from 'react';

import { Link, routes } from '@redwoodjs/router';

type BlogLayoutProps = {
  children?: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog test new</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
