import { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenuOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderStyle>
      <HeaderOverlay open={isOpen} onClick={toggleMenuOpen} />
      <h1 onClick={() => navigate("/react-shoeshop")}>ShoeShop</h1>
      <header>
        <HeaderMenu open={isOpen}>
          <NavLink to='/react-shoeshop/'>
            <span className='material-symbols-outlined'>home</span>메인 화면
          </NavLink>
          <NavLink to='/react-shoeshop/itemall'>
            <span className='material-symbols-outlined'>shopping_bag</span>
            전체 상품
          </NavLink>
          <NavLink to='/react-shoeshop/cart'>
            <span className='material-symbols-outlined'>shopping_cart</span>장바구니
          </NavLink>
          <NavLink to='/react-shoeshop/login'>
            <span className='material-symbols-outlined'>login</span>로그인
          </NavLink>
        </HeaderMenu>
      </header>
      <MobileNavBar>
        <span
          className='material-symbols-outlined'
          onClick={() => {
            navigate(-1);
          }}>
          arrow_back
        </span>
        <span className='material-symbols-outlined' onClick={toggleMenuOpen}>
          menu
        </span>
      </MobileNavBar>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  position: fixed;
  z-index: 97;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: #fff;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: none;

    @media screen and (min-width: 700px) {
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

const MobileNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }

  span {
    cursor: pointer;
  }
`;

const HeaderOverlay = styled.div<any>`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${(props: any) =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const HeaderMenu = styled.div<any>`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  translate: 100% 0;
  width: 14rem;
  height: 100%;
  padding: 1.25rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  visibility: hidden;
  transition: 0.3s;

  ${(props) =>
    props.open &&
    css`
      translate: 0 0;
      visibility: visible;
    `}

  @media screen and (min-width: 700px) {
    position: relative;
    top: 0;
    right: 0;
    translate: 0 0;
    width: auto;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    visibility: visible;
  }
`;

const NavLink = styled(Link)`
  margin-top: 2rem;
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (min-width: 700px) {
    margin-top: 0;
  }

  &:hover {
    border-bottom: 2px solid #3d3d3d;
  }

  span {
    font-size: 2rem;
    margin-right: 1rem;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
`;

// const BtnStyle = styled.button`
//   margin-left: 32px;
//   padding: 6px 12px;
//   background-color: #3d3d3d;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   &:hover {
//     cursor: pointer;
//   }
//   &:active {
//     background-color: white;
//     color: #3d3d3d;
//   }
// `;
