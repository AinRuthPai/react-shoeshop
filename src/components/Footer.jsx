import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBox = styled.footer`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 55px;
    /* border: 1px solid #008cff; */
    background-color: #ebecee;
    z-index: 99;
    bottom: 0;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function Footer() {
  return (
    <FooterBox>
      <div>
        <FooterLink to='/react-shoeshop/itemall'>전체상품</FooterLink>
        <FooterLink to='/react-shoeshop'>home</FooterLink>
        <FooterLink to='/react-shoeshop/cart'>장바구니</FooterLink>
      </div>
    </FooterBox>
  );
}
