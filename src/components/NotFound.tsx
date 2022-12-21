import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BlueBtn } from "./Cart";

const NotFoundMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundMsg>
      <h2>404 Not Found</h2>
      <span>요청하신 페이지를 찾을 수 없습니다.</span>
      <BlueBtn onClick={() => navigate("/react-shoeshop")}>돌아가기</BlueBtn>
    </NotFoundMsg>
  );
}
