import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "../pages/MainPage";

export default function Brand() {
  return (
    <>
      <Menu>
        <span>브랜드</span>
        <span className='material-symbols-outlined'>arrow_forward_ios</span>
      </Menu>
      <BrandContainer>
        <BrandIconLink to='#'>Vans</BrandIconLink>
        <BrandIconLink to='#'>Converse</BrandIconLink>
        <BrandIconLink to='#'>Adidas</BrandIconLink>
        <BrandIconLink to='#'>Newbalance</BrandIconLink>
        <BrandIconLink to='#'>Shoopen</BrandIconLink>
        <BrandIconLink to='#'>Nike</BrandIconLink>
      </BrandContainer>
    </>
  );
}

const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 3rem 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const BrandIconLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  background-color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
