import { Menu, GridItem } from "./MainPage";
import Item from "./Item";

export default function ItemAll({ data }) {
  return (
    <>
      <Menu>
        <span>전체 상품</span>
        <span>{`>`}</span>
      </Menu>
      <GridItem>
        {data.map((data) => (
          <Item data={data} key={data.id} />
        ))}
      </GridItem>
    </>
  );
}
