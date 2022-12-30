import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <div>
        <h1>ShoeShop</h1>
        <p>Fasion Shoes Collection</p>
      </div>

      <div>
        <span>소개</span> | <span>운영 정책</span> | <span>개인정보 처리 및 취급방침</span>
      </div>

      <p>Copyright © ShoeShop All Rights Reserved</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 200px;
  margin-top: 20px;
  background-color: black;
  color: #fff;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > h1 {
      margin-right: 8px;
      font-size: 26px;
    }

    > p {
      color: aqua;
    }
  }

  span {
    margin: 4px 6px;
    cursor: pointer;
  }

  > p {
    color: #f4f4f4;
  }
`;
