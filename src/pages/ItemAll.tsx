import { Menu, SortingItemWrapper } from "./MainPage";
import Item from "../components/Item";
import styled from "styled-components";

export default function ItemAll({ data }: any) {
  return (
    <>
      <Menu>
        <span>전체 상품</span>
        <span>{`>`}</span>
      </Menu>
      <ItemContainer>
        {data.map((data: any) => (
          <Item data={data} key={data.id} />
        ))}
      </ItemContainer>
    </>
  );
}

const ItemContainer = styled(SortingItemWrapper)`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  background-color: rgba(238, 239, 243, 0.5);

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    margin: 1rem auto;
  }
`;
