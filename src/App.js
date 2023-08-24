import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./css/header.css";
import "./css/home.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Profile from './modules/pages/Profile/Profile';
import AddProfile from './modules/pages/AddProfile/AddProfile';
import EditProfile from './modules/pages/EditProfile/EditProfile';
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Profile />}/>
      <Route path='/add' element={<AddProfile />}/>
      <Route path='/edit' element={<EditProfile />}/>
      {/* <Route path='/product-page/:productType/:productId' exact element={<Product />}></Route> */}
    </Routes>
    {/* <Footer /> */}
    </ThemeProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
