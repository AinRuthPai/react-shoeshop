import styled from "styled-components";
import bannerImg from "../img/main_img.jpg";
import Item from "./Item";

export default function MainPage({ data }: any) {
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
        {todayItem.map((data: any) => {
          return <Item data={data} key={data.id} />;
        })}
      </GridItem>
    </>
  );
}

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  padding-bottom: 16px;
  color: #3d3d3d;
  font-size: 40px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: 50%;

  > span:first-child {
    margin-left: 10%;
  }
  > span:nth-child(2) {
    margin-left: 15%;
  }
  > span:last-child {
    margin-left: 20%;
  }
  span {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 48px;
  padding: 6px 16px;
  font-size: 24px;
  border-bottom: 2px solid #3d3d3d;
  text-align: left; //
  > span:last-child {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
