import { Link, useLocation } from "react-router";
import styles from "./Header.module.scss";
import logoSvg from "~/assets/logo.svg";

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.header__img} src={logoSvg} alt="Логотип Идём в кино"></img>
          </Link>
        </div>
        {location.pathname === "/" && <button className={styles.btn}>Войти</button>}
      </div>
    </header>
  );
}
