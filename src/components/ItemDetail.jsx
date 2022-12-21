import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Menu } from "./MainPage";
import { BlueBtn } from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
import Swal from "sweetalert2";

const DetailImg = styled.img`
  width: 40rem;
  height: 30rem;
  object-fit: contain;
  margin: 20px 0;
`;

const DetailItemBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function ItemDetail({ data }) {
  let { id } = useParams();
  const dispatch = useDispatch();

  const findItem = data.find((item) => {
    return item.id === Number(id);
  });

  return (
    <>
      <Menu>
        <span>상품 정보</span>
        <span>{`>`}</span>
      </Menu>
      <DetailItemBox>
        <DetailImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${findItem.id + 1}.jpg`} />
        <div>
          <h3>{findItem.title}</h3>
          <p>{findItem.content}</p>
          <p>￦ {findItem.price}</p>
          <BlueBtn
            onClick={() => {
              dispatch(addItem({ id: findItem.id, name: findItem.title, price: findItem.price, count: 1 }));
              Swal.fire({
                icon: "success",
                title: "완료!",
                text: "장바구니에 상품이 추가되었습니다.",
              });
            }}>
            장바구니 담기
          </BlueBtn>
        </div>
      </DetailItemBox>
    </>
  );
}
