import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import We from "./Components/We/We";
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nosotros" element={<We />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
