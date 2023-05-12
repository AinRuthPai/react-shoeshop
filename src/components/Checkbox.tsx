// import { useState, useCallback } from "react";
// import { useSelector } from "react-redux";

// export default function Checkbox() {
//   const state: any = useSelector((state) => state);

//   const [isChecked, setIsChecked] = useState<any>(true);
//   const [checkedList, setCheckedList] = useState<any>(state.cart);

//   function checkedItemHandler(value: any, isChecked: boolean) {
//     if (isChecked) {
//       setCheckedList((prev: any) => [...prev, value]);

//       return;
//     }

//     if (!isChecked && checkedList.includes(value)) {
//       setCheckedList(checkedList.filter((item: any) => item !== value));

//       return;
//     }

//     return;
//   }

//   function checkHandler(e: React.ChangeEvent<HTMLInputElement>, value: any) {
//     setIsChecked(!isChecked);
//     checkedItemHandler(value, e.target.checked);
//   }

//   const onSubmit = useCallback(
//     (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();

//       console.log("test : ", checkedList);
//     },
//     [checkedList]
//   );

//   return <input type='checkbox'></input>;
// }
