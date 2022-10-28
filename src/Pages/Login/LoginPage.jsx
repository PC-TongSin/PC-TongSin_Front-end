import React from 'react';
import styled from 'styled-components';
import LoginBody from '../../components/Login/LoginBody/LoginBody';
import LoginHeader from '../../components/Login/LoginHeader/LoginHeader';
import LoginTitle from '../../components/Login/LoginTitle/LoginTitle';

const LoginPage = ({}) => {
  return (
    <>
      <Layout>
        <LoginHeader />
        <LoginTitle />
        <LoginBody />
      </Layout>
    </>
  );
};
export default LoginPage;

const Layout = styled.div`
  width: 100%;
  padding: 0 20%;
`;
