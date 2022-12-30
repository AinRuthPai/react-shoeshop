import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store";

export default function Login() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  function handleLoginForm(event: any) {
    event.preventDefault();
    dispatch(login({ email: text, password: text2 }));
    setText("");
    setText2("");
  }

  function onChange(e: any) {
    setText(e.target.value);
  }

  function onChange2(e: any) {
    setText2(e.target.value);
  }

  return (
    <FormDiv>
      <FormStyle onSubmit={handleLoginForm}>
        <input type='text' placeholder='email' onChange={onChange} value={text} />
        <input type='password' placeholder='password' onChange={onChange2} value={text2} />
        <button>로그인</button>
      </FormStyle>
      <div>
        <span>{`아직 계정이 없으신가요? ->`} </span>
        <span>회원가입</span>
      </div>
    </FormDiv>
  );
}

const FormDiv = styled.div`
  width: 100%;
  height: 50vh;
  margin: 80px auto;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  > input {
    width: 70%;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    &:focus {
      border-bottom: 2px solid #3d3d3d;
    }
  }
  > button {
    width: 30%;
    margin: 2rem;
    padding: 12px 16px;
    background-color: #3d3d3d;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
