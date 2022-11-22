import styled from "styled-components";

const FormDiv = styled.div`
  width: 100%;
  height: 30vh;
  margin: 5rem auto;
`;

const FormStyle = styled.form`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > input {
    width: 70%;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    &:focus {
      border-bottom: 2px solid #008cff;
    }
  }
  > button {
    border: none;
    border-radius: 6px;
    background-color: #008cff;
    color: #fff;
    margin: 2rem;
    padding: 12px 16px;
    width: 30%;
    cursor: pointer;
    font-size: 14px;
  }
`;

export default function Login() {
  return (
    <FormDiv>
      <FormStyle>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <button>로그인</button>
      </FormStyle>
      <div>
        <span>{`아직 계정이 없으신가요? ->`} </span>
        <span>회원가입</span>
      </div>
    </FormDiv>
  );
}
