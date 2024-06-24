import { Link } from "react-router-dom";

import styles from "./header.module.css";
import logo from "../imagens/imagem (7).jfif";
import lupa from "../imagens/lupa.png";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={styles.nav_link}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Escocia">Escócia</Link>
          </li>

          <li>
            <Link to="/GrandCanyon">Grand Canyon</Link>
          </li>

          <li>
            <Link to="/Muralhas_China">Muralhas da China</Link>
          </li>

          <li>
            <Link to="/Aruba">Aruba</Link>
          </li>
          {/* testei sem a barra e funcionou */}
        </ul>
      </nav>

      <div className={styles.search}>
        <input type="search" placeholder="Busque por viagens" />
        <img src={lupa} alt="" className={styles.lupa} />
      </div>
    </header>
  );
}

export default Header;
