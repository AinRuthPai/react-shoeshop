import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Data } from "./db/Data";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import ItemAll from "./components/ItemAll";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

export default function App() {
  const data = Data;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/react-shoeshop' element={<MainPage data={data} />} />
        <Route path='/react-shoeshop/detail/:id' element={<ItemDetail data={data} />} />
        <Route path='/react-shoeshop/itemall' element={<ItemAll data={data} />} />
        <Route path='/react-shoeshop/cart' element={<Cart />} />
        <Route path='/react-shoeshop/login' element={<Login />} />
        <Route path='/react-shoeshop/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`

body {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Pretendard-Regular';

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
}
`;
