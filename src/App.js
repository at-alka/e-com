import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './modules/pages/HomePage/HomePage';
import ProductPage from './modules/pages/ProductPage/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './modules/pages/Product/Product'
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./css/header.css";
import "./css/home.css";
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/product-page/:productType/:productId' exact element={<Product />}></Route>
    </Routes>
    <Footer />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;