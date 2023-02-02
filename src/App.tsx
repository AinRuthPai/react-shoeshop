import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Data } from "./db/Data";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import ItemAll from "./pages/ItemAll";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const data = Data;

  return (
    <BrowserRouter>
      <ScrollToTop />
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

:root {
  /* size */
  --footer-height: 10rem;
  --nav-height: 4rem;
  
  /* color */
  --white: #fff;
  --black: #3d3d3d;
  --gray: #f4f4f4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  max-width: 100%;
}

body {
  width: 100%;
  margin: 0 auto ;
  text-align: center;
  font-family: 'Pretendard-Regular';
  animation: fadein 2s;

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
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
`;
