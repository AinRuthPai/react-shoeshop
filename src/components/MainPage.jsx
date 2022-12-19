import styled from "styled-components";
import bannerImg from "../main_img.jpg";
import Item from "./Item";

const Banner = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 40px;
  color: #3d3d3d;
  padding-bottom: 1rem;
  > span:first-child {
    margin-left: 10%;
  }
  > span:nth-child(2) {
    margin-left: 15%;
  }
  > span:last-child {
    margin-left: 20%;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 6px 16px;
  text-align: left;
  font-size: 1.5rem;
  border-bottom: 2px solid #3d3d3d;
  > span:last-child {
    position: absolute;
    right: 0;
  }
`;

export default function MainPage({ data }) {
  const todayItem = [];
  for (let i = 0; i < 6; i++) {
    if (i >= 0) {
      const ran = data[Math.floor(Math.random() * data.length)];
      if (todayItem.indexOf(ran) === -1) {
        todayItem.push(ran);
      } else {
        i--;
      }
    }
  }

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
