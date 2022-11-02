import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 60rem;
  min-width: 50rem;
  border-left-color: ${(props) => props.theme.BALCK};
  border-top-color: ${(props) => props.theme.BALCK};
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  box-sizing: border-box;
  display: inline-block;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  padding: 1rem;
  border-style: solid;
  border-width: 2px;
`;

export const Header = styled.div`
  cursor: default;
  height: 35px;
  margin-right: 2px;
  line-height: 35px;
  font-weight: bold;
  color: ${(props) => props.theme.BALCK};
  padding: 0px 1rem;
  padding-right: 0;
  background: linear-gradient(to right, rgb(0, 0, 128), rgb(16, 52, 166));
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
export const HeaderText = styled.p`
  flex-grow: 1;
  padding-right: 12px;
`

export const ActionBtnContainer = styled.div`
  display: flex;
  width: 10rem;
  & button {
    border: 1px solid transparent;
    box-shadow: none;
    flex-basis: 60px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  width: 7rem;
  box-sizing: border-box;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-left-color: ${(props) => props.theme.BALCK};
  border-top-color: ${(props) => props.theme.BALCK};
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  height: 35px;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  padding: 0px 0.5rem;
  font-family: 'Neo둥근모 Code';

  &.is-start {
    font-weight: bold;
    max-width: 80px;
  }
  
  &.is-square {
    width: 30px;
    height: 30px;
  }

  &:active {
    border-left-color: rgb(5, 6, 8);
    border-top-color: rgb(5, 6, 8);
    border-right-color: ${(props) => props.theme.BALCK};
    border-bottom-color: ${(props) => props.theme.BALCK};
    box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
    border-style: solid;
    border-width: 2px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
