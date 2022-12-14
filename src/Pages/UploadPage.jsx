import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Upload from '../components/Upload/Upload';

const UploadPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Upload />
      </Layout>
    </>
  );
};
export default UploadPage;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
