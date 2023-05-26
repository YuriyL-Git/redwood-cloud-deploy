// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { FC } from 'react';

import { Router, Route, Set } from '@redwoodjs/router';

import { useAuth } from 'src/auth/useAuth';
import BlogLayout from 'src/layouts/BlogLayout';
import ScaffoldLayout from 'src/layouts/ScaffoldLayout';

import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import SignupPage from './pages/SignupPage/SignupPage';
import VerificationPage from './pages/VerificationPage/VerificationPage';

const Routes: FC = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/verification/{token}" page={VerificationPage} name="verification" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password/{resetToken}" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />

      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost" private={true} unauthenticated="login">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>

      <Set wrap={BlogLayout} private={true} unauthenticated="login">
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
    </Router>
  );
};

export default Routes;
