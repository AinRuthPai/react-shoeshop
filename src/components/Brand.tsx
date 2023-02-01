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
        <BrandIconLink to='#'>반스</BrandIconLink>
        <BrandIconLink to='#'>컨버스</BrandIconLink>
        <BrandIconLink to='#'>아디다스</BrandIconLink>
        <BrandIconLink to='#'>뉴발란스</BrandIconLink>
        <BrandIconLink to='#'>슈펜</BrandIconLink>
        <BrandIconLink to='#'>
          <img src='https://www.freeiconspng.com/uploads/nike-icon-logo-png-8.png' alt='' />
        </BrandIconLink>
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

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
  }
`;
