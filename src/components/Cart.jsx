import { Menu } from "./MainPage";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount } from "../store";

const CartContainer = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const CartStyle = styled.table`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  > thead > tr > th {
    border-bottom: 1px solid black;
    padding: 10px 12px;
    background-color: #f4f4f4;
  }

  > tbody > tr > td {
    padding: 8px 10px;
  }
`;

const CartPrice = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 5rem;
  background-color: #f4f4f4;

  > span {
    font-size: 16px;
  }

  > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const BlueBtn = styled.button`
  background-color: #008cff;
  color: #fff;
  margin-top: 3rem;
  font-size: 14px;
  padding: 0.7rem 2.5rem;
  border: none;
  cursor: pointer;
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #008cff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.check &&
    css`
      background-color: #008cff;
      color: #fff;
    `}
`;

const CountBtn = styled.button`
  border: none;
  margin: 0 8px;
  padding: 0 6px;
  background-color: #f4f4f4;
  cursor: pointer;
  font-size: 20px;
`;

const CartImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export default function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(true);

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
              <CheckBox onClick={onToggleCheck} />
            </th>
            <th>전체 선택 3/3</th>
            <th>상품명</th>
            <th>수량</th>
            <th>상품금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <CheckBox onClick={onToggleCheck} />
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
                <td>{state.cart[i].price * state.cart[i].count}</td>
                <td>delete</td>
              </tr>
            );
          })}
        </tbody>
      </CartStyle>
      <CartPrice>
        <span>결제 예정 금액</span>
        <p>123000원</p>
      </CartPrice>
      <BlueBtn>주문하기</BlueBtn>
    </CartContainer>
  );
}
