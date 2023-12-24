import { Link } from "react-router-dom";
import "./navbar.scss";

import IconCart from "../../../public/Icon/IconCart";

function NavBar() {
  return (
    <header className="content">
      <div className="logo__link">
        <Link to={"/"}>
          <img
            src="/public/img/EnCebados.png"
            alt="EnCebados"
            className="logo"
          />
        </Link>
      </div>

      <nav className="content__nav">
        <ul className="menu__list">
          <li className="menu__option">
            <Link to={"/"} className="menu__link">
              Inicio
            </Link>
          </li>
          <li className="menu__option">
            <Link to={"/products"} className="menu__link">
              Productos
            </Link>
          </li>
          <li className="menu__option">
            <Link to={"/nosotros"} className="menu__link">
              Nosotros
            </Link>
          </li>
          <li className="menu__option">
            <Link to={"/contacto"} className="menu__link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div className="content__cart">
        <Link to={"/cart"} className="cart-link">
          <i className="icon">
            <IconCart />
          </i>
        </Link>
        <span className="cart__cont">0</span>
      </div>
    </header>
  );
}

export default NavBar;
