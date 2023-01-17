import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Item({ data }: any) {
  const navigate = useNavigate();

  return (
    <ItemWrapper onClick={() => navigate(`/react-shoeshop/detail/${data.id}`)}>
      <div>
        <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${data.id + 1}.jpg`} />
      </div>
      <h4>{data.title}</h4>
      <p>￦ {data.price}</p>
      <span className='material-symbols-outlined'>add_shopping_cart</span>
    </ItemWrapper>
  );
}

export const ItemImg = styled.img`
  width: 10rem;
  height: 14rem;
  object-fit: contain;
  margin: 10px;

  @media screen and (min-width: 1100px) {
    width: 15rem;
    height: 20rem;
  }

  @media screen and (min-width: 700px) {
    width: 10rem;
    height: 14rem;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 16px auto;
  padding: 0.7rem 0;
  transition: 0.1s ease;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
  }

  div {
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 1.2rem 1.2rem 0;
    cursor: pointer;
  }
`;
