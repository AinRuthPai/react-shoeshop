import styled from "styled-components";
import bannerImg from "../shoes.jpg";
import Item from "./Item";

const Banner = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${bannerImg});
  background-size: 90%;
  background-position: 150%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2.5rem;
  color: #eee;
  padding-bottom: 1rem;
  > span:first-child {
    margin-left: 15rem;
  }
  > span:nth-child(2) {
    margin-left: 20rem;
  }
  > span:last-child {
    margin-left: 25rem;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
`;

export const Menu = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 6px 16px;
  text-align: left;
  font-size: 1.5rem;
  border-bottom: 2px solid #008cff;
  > span:last-child {
    position: absolute;
    right: 0;
  }
`;

export default function MainPage({ data }) {
  const todayItem = [];
  for (let i = 0; i < 7; i++) {
    if (i > 0) {
      const ran = data[Math.floor(Math.random() * data.length)];
      if (todayItem.indexOf(ran) === -1) {
        todayItem.push(ran);
      } else {
        i--;
      }
    }
  }
  console.log(todayItem);

  return (
    <>
      <Banner>
        <span>FASHION</span>
        <span>SHOES</span>
        <span>COLLECTION</span>
      </Banner>
      <Menu>
        <span>오늘의 상품</span>
        <span>{`>`}</span>
      </Menu>
      <GridItem>
        {todayItem.map((data) => {
          return <Item data={data} key={data.id} />;
        })}
      </GridItem>
    </>
  );
}
