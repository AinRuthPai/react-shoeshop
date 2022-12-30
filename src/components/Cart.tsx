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
      <CartStyle>
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
                    -
                  </CountBtn>
                  {state.cart[i].count}
                  <CountBtn
                    onClick={() => {
                      dispatch(addCount(i));
                    }}>
                    +
                  </CountBtn>
                </td>
                <td>{`${state.cart[i].price * state.cart[i].count} 원`}</td>
                <td
                  onClick={() => {
                    dispatch(removeItem(state.cart[i]));
                  }}>
                  <DeleteIcon>❌</DeleteIcon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </CartStyle>
      <CartPrice>
        <span>결제 예정 금액</span>
        <p>{`${totalPrice} 원`}</p>
      </CartPrice>
      <BtnStyle>주문하기</BtnStyle>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const CartStyle = styled.table`
  width: 100%;
  height: 100%;
  margin: 32px auto;
  border: 1px solid black;
  border-collapse: collapse;
  > thead > tr > th {
    padding: 10px 12px;
    background-color: #f4f4f4;
    border-bottom: 1px solid black;
  }

  > tbody > tr > td {
    padding: 8px 10px;
  }
`;

const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 64px;
  margin-top: 5%;
  padding: 0 32px;
  background-color: #f4f4f4;
  border: 1px solid black;

  > span {
    font-size: 16px;
  }

  > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const BtnStyle = styled.button`
  margin-top: 3%;
  padding: 12px 40px;
  background-color: #3d3d3d;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const CheckBox = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 16px;
  border: 1px solid #3d3d3d;
  cursor: pointer;
  ${(props: any) =>
    props.check &&
    css`
      background-color: #3d3d3d;
      color: #fff;
    `}
`;

const CountBtn = styled.button`
  margin: 0 8px;
  padding: 0 6px;
  background-color: #f4f4f4;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const CartImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const DeleteIcon = styled.button`
  padding: 0;
  background-color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
