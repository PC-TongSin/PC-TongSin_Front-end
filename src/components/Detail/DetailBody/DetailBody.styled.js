import styled from "styled-components";

export const DetailContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
`

export const DetailNotice = styled.div`
  display: flex;
  width: 30rem;
  margin: 0 auto;
  padding: 1rem;
  border: 2.425px solid white;
  text-align: center;
  justify-content: center;
`

export const DetailTitle = styled.h1`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding-top: 5rem;
  border-bottom: 1px solid white;
  padding-bottom: 3rem;
`

export const DetailInfo = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 90%;
  border-bottom: 2px solid white;
  padding-top: 1rem;
  text-align: right;
  & th {
    width: 5rem;
    text-align: right;
  }
`

export const DetailBody = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3rem;
`
