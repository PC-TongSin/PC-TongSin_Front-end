import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import SignBody from '../../components/Sign/SignBody/SignBody';

import SignTitle from '../../components/Sign/SignTitle/SignTitle';

const SignPage = ({}) => {
  return (
    <>
      <Header />
      <Layout>
        <SignTitle />
        <SignBody />
      </Layout>
    </>
  );
};
export default SignPage;

const Layout = styled.div`
  width: 100%;
  padding: 0 20%;
`;
