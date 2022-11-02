import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  __getNickname,
  __getUsername,
} from '../../redux/modules/Slice/userSlice';
import UploadBox from './UploadBox/UploadBox';
import UploadTextareaBox from './UploadTextareaBox/UploadTextareaBox';

const Upload = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, nickname } = useSelector((state) => state.users);
  const [on, setOn] = useState(false);

  console.log(username);
  console.log(nickname);

  const yes = () => {
    console.log(1);
    dispatch(__getNickname());
    dispatch(__getUsername());
    setOn(true);
  };

  useEffect(() => {
    yes();
  }, [dispatch, username]);

  console.log(username);
  console.log(nickname);

  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/api/boards`,
      {
        title: input.title,
        content: input.content,
      },
      {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      }
    );
    window.confirm('업로드 완료');
    navigate('/board');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInput({
      title: '',
      content: '',
    });
  };

  return (
    <>
    <UploadContainer>
      <UploadHeader>
        <UploadHeaderText>게시물 등록</UploadHeaderText>
        <UploadBtn onClick={handleCancel}>X</UploadBtn>
      </UploadHeader>
      <hr/>
      <form onSubmit={handleSubmit}>
        <UploadBox title='작성자'>
          <Span2>{username}</Span2>
        </UploadBox>
        <UploadBox title='닉네임'>
          <Span2>{nickname}</Span2>
        </UploadBox>
        <UploadBox>
          <BoxInput
            value={input.title}
            name='title'
            onChange={handleChange}
          />
        </UploadBox>
        <UploadTextareaBox
          content={input.content}
          handleChange={handleChange}
        />
        <hr/>
        <UploadBtn>등록</UploadBtn>
      </form>
    </UploadContainer>
      {/* <U.Section>
        <form onSubmit={handleSubmit}>
          <U.TitleDiv>
            <U.TitleSpan>글 작성</U.TitleSpan>
          </U.TitleDiv>

          <U.ThinDiv>
            <U.ThinDiv2>
              <UploadBox title='작성자'>
                <Span2>{username}</Span2>
              </UploadBox>
              <UploadBox title='닉네임'>
                <Span2>{nickname}</Span2>
              </UploadBox>
              <UploadBox>
                <BoxInput
                  value={input.title}
                  name='title'
                  onChange={handleChange}
                />
              </UploadBox>
              <UploadTextareaBox
                content={input.content}
                handleChange={handleChange}
              />
            </U.ThinDiv2>
            <ButtonDiv>
              <ButtonCancel onClick={handleCancel}>취소</ButtonCancel>
              <ButtonSubmit>게시물 등록</ButtonSubmit>
            </ButtonDiv>
          </U.ThinDiv>
        </form>
      </U.Section> */}
    </>
  );
};
export default Upload;

export const UploadContainer = styled.section`
  width: 100%;
  height: 36.5rem;
  margin: 0 auto;
  max-width: 70rem;
  min-width: 60rem;
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
`

export const UploadHeader = styled.div`
  cursor: default;
  height: 4rem;
  font-size: 1.2rem;
  margin-right: 2px;
  line-height: 35px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 0px 1rem;
  padding-right: 0;
  background: linear-gradient(to right, rgb(0, 0, 128), rgb(16, 52, 166));
  display: flex;
  align-items: center;
`

export const UploadHeaderText = styled.p`
  flex-grow: 1;
  padding-right: 12px;
`

export const UploadBtn = styled.button`
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
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  height: 4rem;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  padding: 0px 0.5rem;
  float: right;
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
    border-right-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
    border-style: solid;
    border-width: 2px;
  }
`

const BoxInput = styled.input`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  color: ${(props) => props.theme.BLACK};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background: transparent;
  /* border: none; */
  border-bottom: 2px solid ${(props) => props.theme.WHITE};
`;

const Span2 = styled.span`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  color: ${(props) => props.theme.WHITE};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};
`;

const BoxTextArea = styled.textarea`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  /* color: ${(props) => props.theme.WHITE}; */
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background-color: white;
  border: none;
  resize: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};

  height: 10rem;

  &:hover {
    outline: none;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonCancel = styled.button`
  background-color: ${(props) => props.theme.GREY};
  width: 6rem;
  height: 4rem;
  font-size: 2rem;
  color: ${(props) => props.theme.BLACK};
  font-family: 'Neo둥근모 Code';
  margin-left: 1rem;
`;

const ButtonSubmit = styled.button`
  background-color: transparent;
  width: 14rem;
  height: 6rem;
  font-size: 2rem;
  font-family: 'Neo둥근모 Code';
  color: ${(props) => props.theme.WHITE};
  border: 1px solid ${(props) => props.theme.WHITE};
`;
