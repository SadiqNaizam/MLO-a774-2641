import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/UserAuthentication/LoginForm';

/**
 * LoginPage serves as the main authentication page for users to log in.
 * It utilizes the AuthLayout (via MainAppLayout) to structure the page
 * and embeds the LoginForm component for handling user credentials.
 */
const LoginPage: React.FC = () => {
  // The title is derived from Project Info: 
  // name: "Login Screen", targetPage: "User Authentication - Login"
  const pageTitle = "Login - Login Screen";

  return (
    <MainAppLayout title={pageTitle}>
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
