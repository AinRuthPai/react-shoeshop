import { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [onClickMenu, setOnClickMenu] = useState<boolean>(false);
  const targetRef: any = useRef(null);
  let prevScrollTop = 0;

  function toggleMenuOpen() {
    setIsOpen(!isOpen);
  }

  function handleScroll() {
    let nextScrollTop = window.pageYOffset || 0;
    if (nextScrollTop > prevScrollTop) {
      // 스크롤 내릴 때 실행
      // targetRef.current.style.translate = "0 -64px";
      targetRef.current.style.display = "none";
    } else if (nextScrollTop < prevScrollTop) {
      // 스크롤 올릴 때 실행
      // targetRef.current.style.translate = "0 0";
      targetRef.current.style.display = "flex";
    }
    prevScrollTop = nextScrollTop;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleDropDown() {
    setOnClickMenu(!onClickMenu);
  }

  return (
    <NavContainer ref={targetRef}>
      <NavOverlay open={isOpen} onClick={toggleMenuOpen} />
      <h1 onClick={() => navigate("/react-shoeshop")}>ShoeShop</h1>
      <header>
        <NavMenu open={isOpen}>
          <NavLink to='/react-shoeshop/'>
            <span className='material-symbols-outlined'>home</span>메인 화면
          </NavLink>
          <NavLink to='/react-shoeshop/itemall'>
            <span className='material-symbols-outlined'>shopping_bag</span>
            전체 상품
          </NavLink>
          <DropDownMenu open={onClickMenu} onClick={handleDropDown}>
            <span className='material-symbols-outlined'>category</span>
            브랜드
          </DropDownMenu>
          <Test open={onClickMenu}>
            <li>Vans</li>
            <li>Converse</li>
            <li>Adidas</li>
            <li>Newbalance</li>
            <li>Shoopen</li>
            <li>Nike</li>
          </Test>
          <NavLink to='/react-shoeshop/cart'>
            <span className='material-symbols-outlined'>shopping_cart</span>장바구니
          </NavLink>
          <NavLink to='/react-shoeshop/login'>
            <span className='material-symbols-outlined'>login</span>로그인
          </NavLink>
          <button>
            <span className='material-symbols-outlined'>account_circle</span>
          </button>
        </NavMenu>
      </header>
      <NavMobile>
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
      </NavMobile>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  z-index: 97;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  padding: 0 1rem;
  background-color: white;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    position: absolute;
    font-size: 1.3rem;
    cursor: pointer;

    @media screen and (min-width: 700px) {
      position: static;
      display: block;
      font-size: 1.5rem;
    }
  }
`;

const NavOverlay = styled.div<any>`
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

const NavMenu = styled.div<any>`
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
  background-color: var(--white);
  visibility: hidden;
  transition: 0.3s;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 1rem auto;

    span {
      font-size: 2rem;
    }
  }

  ${(props: any) =>
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

const NavMobile = styled.nav`
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

const NavLink = styled(Link)`
  margin-top: 1rem;
  margin-left: 1rem;
  padding-right: 0.5rem;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (min-width: 700px) {
    margin-top: 0;
  }

  &:hover {
    border-bottom: 2px solid var(--black);
  }

  span {
    font-size: 2rem;
    margin-right: 1rem;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
`;

const DropDownMenu = styled.div<any>`
  margin-top: 1rem;
  margin-left: 1rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 2px solid var(--black);
    cursor: pointer;
  }

  span {
    font-size: 2rem;
    margin-right: 1rem;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
`;

const Test = styled.ul<any>`
  display: none;
  list-style: none;

  ${(props: any) =>
    props.open &&
    css`
      display: flex;
      flex-direction: column;
      margin: 0.5rem auto;
      animation: fade-in 0.3s;
    `}

  li {
    margin: 0.5rem 0;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
