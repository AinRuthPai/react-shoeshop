import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ItemImg = styled.img`
  width: 80%;
  height: 80%;

  margin-top: 1rem;
`;

const ItemWrapper = styled.div`
  width: 60%;
  height: 70%;
  cursor: pointer;
  margin: 1rem auto;
  transition: 0.1s ease;
  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;

export default function Item({ data }) {
  const navigate = useNavigate();

  return (
    <div>
      <ItemWrapper onClick={() => navigate(`/react-shoeshop/detail/${data.id}`)}>
        <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${data.id + 1}.jpg`} />
        <h4>{data.title}</h4>
        <p>{data.content}</p>
        <p>￦ {data.price}</p>
      </ItemWrapper>
    </div>
  );
}
