import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BtnStyle } from "./Cart";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundMsg>
      <h2>404 Not Found</h2>
      <span>요청하신 페이지를 찾을 수 없습니다.</span>
      <BtnStyle onClick={() => navigate("/react-shoeshop")}>돌아가기</BtnStyle>
    </NotFoundMsg>
  );
}

const NotFoundMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;
