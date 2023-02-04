import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ItemImg } from "./ItemCard";

export default function Item({ data }: any) {
  const navigate = useNavigate();

  function linkToDetail() {
    navigate(`/react-shoeshop/detail/${data.id}`);
  }

  return (
    <ItemContainer onClick={linkToDetail}>
      <div>
        <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${data.id + 1}.jpg`} />
      </div>
      <div>
        <h4>{data.title}</h4>
        <p>￦ {data.price}</p>
      </div>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  background-color: white;

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1rem;
  }
`;
