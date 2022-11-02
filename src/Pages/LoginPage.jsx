import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import LoginBody from '../components/Login/LoginBody/LoginBody';
import LoginTitle from '../components/Login/LoginTitle/LoginTitle';

const LoginPage = ({}) => {
  return (
    <>
      <Header />
      <Layout>
        <LoginTitle />
        <LoginBody />
      </Layout>
    </>
  );
};
export default LoginPage;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
