import styled, { css } from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./MainPage";
import { addCount, removeCount, removeItem } from "../store";

export default function Cart() {
  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(true);
  const state: any = useSelector((state) => state);

  const itemPrice = state.cart.map((state: any) => {
    return Object.values<any>(state)[2] * state.count;
  });

  const totalPrice = itemPrice.reduce((a: any, b: any) => a + b, 0);

  function onToggleCheck() {
    setCheck(!check);
  }

  return (
    <CartContainer>
      <Menu>
        <span>장바구니</span>
        <span>{`>`}</span>
      </Menu>
      <CartTable>
        <thead>
          <tr>
            <th>
              <CheckBox onClick={onToggleCheck} check={check}>
                {check ? <p>✔</p> : null}
              </CheckBox>
            </th>
            <th>전체 선택 {state.cart.length}</th>
            <th>상품명</th>
            <th>수량</th>
            <th>상품금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item: any, i: any) => {
            return (
              <tr key={i}>
                <td>
                  <CheckBox onClick={onToggleCheck} check={check}>
                    {check ? <p>✔</p> : null}
                  </CheckBox>
                </td>
                <td>
                  <CartImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${item.id + 1}.jpg`} />
                </td>
                <td>{state.cart[i].name}</td>
                <td>
                  <CountBtn
                    onClick={() => {
                      dispatch(removeCount(i));
                    }}>
                    <span className='material-symbols-outlined'>remove</span>
                  </CountBtn>
                  <span>{state.cart[i].count}</span>
                  <CountBtn
                    onClick={() => {
                      dispatch(addCount(i));
                    }}>
                    <span className='material-symbols-outlined'>add</span>
                  </CountBtn>
                </td>
                <td>{`${state.cart[i].price * state.cart[i].count} 원`}</td>
                <td
                  onClick={() => {
                    dispatch(removeItem(state.cart[i]));
                  }}>
                  <DeleteIcon>
                    <span className='material-symbols-outlined'>delete</span>
                  </DeleteIcon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </CartTable>
      <CartPrice>
        <span>결제 예정 금액</span>
        <p>{`${totalPrice} 원`}</p>
      </CartPrice>
      <BtnTamplate>주문하기</BtnTamplate>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  min-height: calc(100vh - 9rem);
  margin: 0 auto;
`;

const CartTable = styled.table`
  width: 100%;
  height: 100%;
  margin: 1rem auto;
  border-collapse: collapse;

  thead tr th {
    padding: 8px 10px;
    background-color: var(--gray);
    border-bottom: 1px solid black;
  }

  tbody tr td {
    padding: 8px;
  }
`;

const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 64px;
  margin: 5%;
  padding: 0 32px;
  background-color: var(--gray);
  border: 1px solid black;

  > span {
    font-size: 14px;
  }

  > p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const BtnTamplate = styled.button`
  margin: 5%;
  padding: 12px 40px;
  background-color: var(--black);
  color: var(--white);
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
`;

const CheckBox = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 16px;
  border: 1px solid var(--black);
  cursor: pointer;
  ${(props: any) =>
    props.check &&
    css`
      background-color: var(--black);
      color: var(--white);
    `}
`;

const CountBtn = styled.button`
  margin: 4px 8px;
  padding: 2px 4px;
  background-color: var(--gray);
  border: none;
  cursor: pointer;

  span {
    font-size: 1.2rem;
  }
`;

const CartImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const DeleteIcon = styled.button`
  padding: 0;
  background-color: var(--white);
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
