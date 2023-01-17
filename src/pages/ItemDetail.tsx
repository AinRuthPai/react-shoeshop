import styled from "styled-components";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { Menu } from "./MainPage";
import { BtnStyle } from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

export default function ItemDetail({ data }: any) {
  const dispatch = useDispatch();
  let { id } = useParams();

  const findItem = data.find((item: any) => {
    return item.id === Number(id);
  });

  return (
    <DetailWrapper>
      <Menu>
        <span>상품 정보</span>
        <span>{`>`}</span>
      </Menu>
      <DetailItemBox>
        <DetailImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${findItem.id + 1}.jpg`} />
        <div>
          <p>brand</p>
          <h3>{findItem.title}</h3>
          <p>{findItem.content}</p>
          <span>￦ {findItem.price}</span>
        </div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </DetailItemBox>
      <MobileDetailFooter>
        <span>현재 가격</span>
        <CartBtn
          onClick={() => {
            dispatch(addItem({ id: findItem.id, name: findItem.title, price: findItem.price, count: 1 }));
            Swal.fire({
              icon: "success",
              title: "완료!",
              text: "장바구니에 상품이 추가되었습니다.",
            });
          }}>
          장바구니 담기
        </CartBtn>
      </MobileDetailFooter>
      <MenuLine />
      <ItemDetailContent>
        <h3>상품 상세정보</h3>
      </ItemDetailContent>
    </DetailWrapper>
  );
}

const MobileDetailFooter = styled.nav`
  position: fixed;
  z-index: 95;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px -2px 4px 2px rgba(0, 0, 0, 0.7);

  span {
    padding-left: 2rem;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
`;

const CartBtn = styled(BtnStyle)`
  width: 50%;
  padding: 20px 10px;
`;

const DetailImg = styled.img`
  width: 230px;
  height: 250px;
  margin: 4rem auto 0;
  object-fit: contain;
`;

const DetailItemBox = styled.div`
  width: 100%;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2rem;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 2rem 0 0;
    font-size: 18px;

    span,
    button {
      background-color: #3d3d3d;
      padding: 0.3rem 0.6rem;
      color: #fff;
    }
  }

  h3 {
    font-size: 20px;
  }

  p {
    margin: 0.7rem 0;
    color: rgba(0, 0, 0, 0.5);
  }

  span {
    font-weight: 800;
  }
`;

const ItemDetailContent = styled.div`
  width: 80%;
  height: 80vh;
  margin: 2rem auto 0;
  text-align: center;
`;

const MenuLine = styled(Menu)`
  margin: 1rem auto 0;
`;
