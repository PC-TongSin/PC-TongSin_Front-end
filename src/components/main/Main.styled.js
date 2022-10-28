import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  text-align: center;
`

export const MainBanner = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  border: 1.425px solid white;
  & h1 {
    font-size: 7rem;
  }
`

export const MainInfo = styled.p`
  margin-top: 3rem;
  text-align: center;
`

export const MainAccessMsg = styled.div`
  width: min-content;
  margin: 0 auto;
  & p {
    border-right: 5px solid white;
    white-space: nowrap;
    font-size: 1.1rem;
    overflow: hidden;
    animation: typingAnimation 10s steps(26, end) infinite,  
               blinkAnimation 1s step-end infinite;
  }
  @keyframes typingAnimation {
    0% {
      width: 0;
    }
    20%, 90% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }

  @keyframes blinkAnimation {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`