import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import Data from "./db/Data";
import Info from "./components/Info";
import Login from "./components/Login";
import ItemAll from "./components/ItemAll";
import NotFound from "./components/NotFound";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

body {
  margin: 0 auto;
  text-align: center;
  font-family: 'Pretendard-Regular';
  width: 90%;
}
`;

export default function App() {
  const data = Data;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/react-shoeshop' element={<MainPage data={data} />} />
        <Route path='/detail/:id' element={<ItemDetail data={data} />} />
        <Route path='/itemall' element={<ItemAll data={data} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
