import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <header>
        <h1 onClick={() => navigate("/react-shoeshop")}>ShoeShop</h1>
        <div>
          <NavLink to='/react-shoeshop/itemall'>전체 상품</NavLink>
          <NavLink to='/react-shoeshop/cart'>장바구니</NavLink>
          <BtnStyle onClick={() => navigate("/react-shoeshop/login")}>로그인</BtnStyle>
        </div>
      </header>
      <div>🔽</div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 70px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  h1 {
    font-size: 1.5rem;
    cursor: pointer;
  }

  > div:last-child {
    display: none;

    @media screen and (max-width: 768px) {
      position: absolute;
      display: inline-block;
      font-size: 26px;
      left: 0;
    }
  }
`;

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: black;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid #3d3d3d;
  }
`;

const BtnStyle = styled.button`
  margin-left: 32px;
  padding: 6px 12px;
  background-color: #3d3d3d;
  color: white;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: white;
    color: #3d3d3d;
  }
`;
