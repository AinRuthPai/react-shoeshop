import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Item({ data }: any) {
  const navigate = useNavigate();

  return (
    <ItemWrapper onClick={() => navigate(`/react-shoeshop/detail/${data.id}`)}>
      <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${data.id + 1}.jpg`} />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <p>￦ {data.price}</p>
    </ItemWrapper>
  );
}

export const ItemImg = styled.img`
  width: 250px;
  height: 300px;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

const ItemWrapper = styled.div`
  width: 70%;
  margin: 16px auto;
  transition: 0.1s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;
