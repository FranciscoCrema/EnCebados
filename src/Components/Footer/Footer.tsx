import { Link } from "react-router-dom";
import IconInstagram from "../../../public/Icon/IconInstagram";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="content__footer">
        <div className="user__contact">
          <h3>Contacto</h3>
          <h4>Email</h4>
          <span className="contact-email">encebadosmate@gmail.com</span>
        </div>
        <div className="user-info__footer">
          <Link
            to={"https://www.linkedin.com/in/franciscocrema/"}
            target="_blank"
          >
            &copy; 2024 Francisco Crema
          </Link>
        </div>

        <div className="user-social">
          <h3>Redes</h3>
          <Link
            to={"https://www.instagram.com/encebadosmates/"}
            target="_blank"
          >
            <i className="icon">
              <IconInstagram />
            </i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
