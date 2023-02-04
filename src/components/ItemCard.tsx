import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
import Swal from "sweetalert2";

export default function Item({ data }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function linkToDetail() {
    navigate(`/react-shoeshop/detail/${data.id}`);
  }

  return (
    <ItemCardContainer>
      <div>
        <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${data.id + 1}.jpg`} onClick={linkToDetail} />
      </div>
      <h4 onClick={linkToDetail}>{data.title}</h4>
      <p onClick={linkToDetail}>￦ {data.price}</p>
      <span
        className='material-symbols-outlined'
        onClick={() => {
          dispatch(addItem({ id: data.id, name: data.title, price: data.price, count: 1 }));
          Swal.fire({
            icon: "success",
            title: "완료!",
            text: "장바구니에 상품이 추가되었습니다.",
          });
        }}>
        add_shopping_cart
      </span>
    </ItemCardContainer>
  );
}

const ItemCardContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 1rem auto;
  padding: 0.7rem 0;
  transition: 0.1s ease;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
  }

  span {
    position: absolute;
    bottom: 5rem;
    right: 0;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--gray);
  }

  h4,
  p,
  span {
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    width: 80%;
  }
`;

export const ItemImg = styled.img`
  width: 10rem;
  height: 13rem;
  object-fit: contain;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 11rem;
    height: 14rem;
  }
`;
