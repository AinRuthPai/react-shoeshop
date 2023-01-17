import { Menu, GridItem } from "./MainPage";
import Item from "../components/Item";

export default function ItemAll({ data }: any) {
  return (
    <>
      <Menu>
        <span>전체 상품</span>
        <span>{`>`}</span>
      </Menu>
      <GridItem>
        {data.map((data: any) => (
          <Item data={data} key={data.id} />
        ))}
      </GridItem>
    </>
  );
}
