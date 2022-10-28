import styled from "styled-components";

export const BoardContainer = styled.table`
  margin: 0 auto;
  margin-top: 6rem;
  height: 80vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & th, td {
    border-bottom: 1px solid white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 5rem;
    text-align: center;
  }
`
export const BoardItemSmall = styled.td`
  width: 5rem;
  min-width: 4rem;
  text-align: center;
`

export const BoardItemMedium = styled.td`
  width: 10rem;
  min-width: 7rem;
  text-align: center;
`

export const BoardItemLarge = styled.td`
  width: 40rem;
  min-width: 30rem;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateX(10%);
  }
`