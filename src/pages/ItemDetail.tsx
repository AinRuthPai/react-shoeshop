import styled from "styled-components";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "./MainPage";
import { BtnTamplate } from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

export default function ItemDetail({ data }: any) {
  let { id } = useParams();

  const findItem = data.find((item: any) => {
    return item.id === Number(id);
  });

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <DetailContainer>
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
          <button
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              } else {
                setCount(1);
              }
            }}>
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            +
          </button>
        </div>
      </DetailItemBox>
      <MobileDetailFooter>
        <span>{`￦ ${findItem.price * count}`}</span>
        <CartBtn
          onClick={() => {
            dispatch(addItem({ id: findItem.id, name: findItem.title, price: findItem.price, count: count }));
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
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100%;
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
      background-color: var(--black);
      padding: 0.3rem 0.6rem;
      color: var(--white);
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

const DetailImg = styled.img`
  width: 14rem;
  height: 16rem;
  margin: 2rem auto 0;
  object-fit: contain;
`;

const MobileDetailFooter = styled.nav`
  position: fixed;
  z-index: 95;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px -2px 2px 1px rgba(0, 0, 0, 0.5);

  span {
    padding-left: 2rem;
  }
`;

const ItemDetailContent = styled.div`
  width: 80%;
  margin: 2rem auto 0;
  text-align: center;
`;

const CartBtn = styled(BtnTamplate)`
  width: 50%;
  padding: 20px 10px;
`;

const MenuLine = styled(Menu)`
  margin: 1rem auto 0;
`;
