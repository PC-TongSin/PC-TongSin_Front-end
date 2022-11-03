import styled from 'styled-components';

export const ChatContainer = styled.div`
  color: ${(props) => props.theme.WHITE};
  display: flex;
  height: 100%;
  flex-direction: column;
  white-space: pre;
  /* overflow: scroll; */
`

export const StChatInput = styled.input`
  width: 100%;
  padding: 1rem;
  position: fixed;
  bottom: 5px;
  border: ${(props) => props.theme.WHITE};
  background: transparent;
  outline: none;
  font-size: 1rem;
  font-family: 'Neo둥근모 Code';
  color: ${(props) => props.theme.WHITE};
`

export const StUpLoading = styled.span`
  color: yellow;
  margin-left: 0.5rem;
  &::after {
    content: '';
    animation-name: uploading;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    white-space: pre;
  }
@keyframes uploading {
  0%, 100% {
    content: ' [      ]';
  }
  10% { 
    content: ' [>     ]';
  }  
  20% { 
    content: ' [>>    ]';
  }
  30% { 
    content: ' [>>>   ]';
  }
  40% { 
    content: ' [ >>>  ]';
  }  
  50% { 
    content: ' [  >>> ]';
  }
  60% { 
    content: ' [   >>>]';
  } 
  70% { 
    content: ' [    >>]';
  }  
  80% { 
    content: ' [     >]';
  } 
  90% { 
    content: ' [      ]';
  }
}
`

export const StDownLoading = styled.span`
  color: yellow;
  margin-left: 0.5rem;
  &::after {
    content: '';
  animation-name: downloading;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  white-space: pre;
}
@keyframes downloading {
  0%, 100% {
    content: ' [      ]';
  }
  10% { 
    content: ' [     <]';
  }  
  20% { 
    content: ' [    <<]';
  }
  30% { 
    content: ' [   <<<]';
  }
  40% { 
    content: ' [  <<< ]';
  }  
  50% { 
    content: ' [ <<<  ]';
  }
  60% { 
    content: ' [<<<   ]';
  } 
  70% { 
    content: ' [<<    ]';
  }  
  80% { 
    content: ' [<     ]';
  } 
  90% { 
    content: ' [      ]';
  }
}
`

export const StChatBoxContainer = styled.div`
  position: absolute;
  bottom: 4rem;
`

export const StChatBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
`

export const ChatTime = styled.p`
  display: flex;
  float: left;
  margin-right: 1rem;
  margin-left: 1rem;
`

export const ChatMsg = styled.p`
  display: flex;
  float: right;
`