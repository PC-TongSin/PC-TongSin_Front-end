import styled from "styled-components";

export const BoardContainer = styled.table`
  margin: 0 auto;
  margin-top: 6rem;
  width: 70rem;
  min-width: 40rem;
  height: 30vh;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  border: 1px solid #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  & th, td {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-right: 5rem;
    text-align: center;
  }
`
export const BoardItemSmall = styled.td`
  width: 5rem;
  min-width: 4rem;
  height: 2rem;
  text-align: center;
`

export const BoardItemMedium = styled.td`
  width: 10rem;
  min-width: 7rem;
  max-height: 2rem;
  height: 2rem;
  text-align: center;
`

export const BoardItemLarge = styled.td`
  width: 40rem;
  min-width: 30rem;
  height: 2rem;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5%);
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
  }
`