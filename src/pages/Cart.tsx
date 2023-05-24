import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, removeCount, removeItem } from "../store";

export default function Cart() {
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);

  const [isChecked, setIsChecked] = useState<any>(true);
  const [checkedList, setCheckedList] = useState<any>(state.cart);

  const itemPrice = checkedList.map((state: any) => {
    return Object.values<any>(state)[2] * state.count;
  });

  const totalPrice = itemPrice.reduce((a: any, b: any) => a + b, 0);

  useEffect(() => {
    setCheckedList(state.cart);
  }, [state.cart]);

  function checkedItemHandler(value: any, isChecked: boolean) {
    if (isChecked) {
      setCheckedList((prev: any) => [...prev, value]);
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item: any) => item !== value));

      return;
    }

    return;
  }

  function checkHandler(e: React.ChangeEvent<HTMLInputElement>, value: any) {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  }

  function checkedItemAllHandler(isChecked: boolean) {
    if (isChecked) {
      setCheckedList(state.cart);
    } else {
      setCheckedList([]);
    }
  }

  function checkAllHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(!isChecked);
    checkedItemAllHandler(e.target.checked);
  }

  return (
    <CartContainer>
      <CartCheckWrapper>
        <input type='checkbox' onChange={(e) => checkAllHandler(e)} checked={checkedList.length === state.cart.length ? true : false} />

        <span>전체 {state.cart.length}개</span>
        <span>선택 삭제</span>
      </CartCheckWrapper>

      {state.cart.map((item: any, i: any) => {
        return (
          <CartItemWrapper>
            <div>
              <input type='checkbox' checked={checkedList.includes(item)} onChange={(e) => checkHandler(e, item)}></input>
              <CartImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${item.id + 1}.jpg`} />
            </div>
            <div>
              <span>{state.cart[i].name}</span>
              <CountWrapper>
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
              </CountWrapper>
            </div>
            <div>
              <DeleteIcon
                onClick={() => {
                  dispatch(removeItem(state.cart[i]));
                }}>
                <span className='material-symbols-outlined'>delete</span>
              </DeleteIcon>
              <span>{`${state.cart[i].price * state.cart[i].count} 원`}</span>
            </div>
          </CartItemWrapper>
        );
      })}

      <CartPrice>
        <span>결제 예정 금액</span>
        <p>{`${totalPrice} 원`}</p>
      </CartPrice>
      <BtnTamplate>
        <span>{`￦ ${totalPrice}`}</span>
        <span>주문하기</span>
      </BtnTamplate>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 14rem);
  margin: 4rem auto 0;
  background-color: rgba(238, 239, 243, 0.5);
`;

const CartCheckWrapper = styled.div`
  width: 100%;
  height: 4rem;
  margin: 1rem auto;
  padding: 0.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  span:last-child {
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;

const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  padding: 0 2rem;
  background-color: white;

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
  padding: 1rem 2rem;
  background-color: rgb(117, 50, 249);
  color: var(--white);
  border: none;
  cursor: pointer;
  border-radius: 6px;

  > span:first-child {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 1.5rem;
    letter-spacing: 1px;
  }
`;

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background-color: white;
  padding: 0.7rem;

  > div:first-child {
    display: flex;
  }

  > div:nth-child(2),
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(3) {
    align-items: flex-end;
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const CountBtn = styled.button`
  margin: 0 0.5rem;
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
  margin-bottom: 1rem;
  background-color: inherit;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
