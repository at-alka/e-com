
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './modules/pages/HomePage/HomePage';
import ProductPage from './modules/pages/ProductPage/ProductPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./css/header.css";
import "./css/home.css";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
