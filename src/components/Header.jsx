import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const HeaderStyle = styled.div`
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #008cff;
  > header {
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h1 {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 1.5rem;
  &:hover {
    border-bottom: 2px solid #008cff;
  }
`;

const BtnStyle = styled.button`
  background-color: #3d3d3d;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: white;
    color: #3d3d3d;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <header>
        <h1 onClick={() => navigate("/react-shoeshop")}>ShoeShop</h1>
        <div>
          <NavLink to='/react-shoeshop/itemall'>전체 상품</NavLink>
          <NavLink to='/react-shoeshop/cart'>장바구니</NavLink>
          <NavLink to='/react-shoeshop/info'>정보</NavLink>
          <BtnStyle onClick={() => navigate("/react-shoeshop/login")}>로그인</BtnStyle>
        </div>
      </header>
    </HeaderStyle>
  );
}
