import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import We from "./Components/We/We";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <NavBar />

        <main className="layout__content">
          <section className="content__page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/we" element={<We />} />
            </Routes>
          </section>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
