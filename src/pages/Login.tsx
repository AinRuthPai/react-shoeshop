import styled from "styled-components";
import { useRef } from "react";
import axios from "axios";

export default function Login() {
  let emailRef: any = useRef();
  let passwordRef: any = useRef();

  function handleLoginForm() {
    axios
      .post("http://localhost:5000/signup", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(`Login Error : ${error}`);
      });
  }

  return (
    <FormContainer>
      <FormStyle>
        <input type='text' placeholder='email' ref={emailRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button onClick={handleLoginForm}>로그인</button>
        <div>
          <span>{`아직 계정이 없으신가요? ->`} </span>
          <span>회원가입</span>
        </div>
      </FormStyle>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 9rem);
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 18px 10px;

  > input {
    width: 100%;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    &:focus {
      border-bottom: 2px solid var(--black);
    }
  }
  > button {
    margin: 1rem;
    padding: 8px 16px;
    background-color: var(--black);
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
