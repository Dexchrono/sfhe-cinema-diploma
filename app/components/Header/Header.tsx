import styles from "./Header.module.scss";
import logoSvg from "~/assets/logo.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <a href="#">
            <img className={styles.header__img} src={logoSvg} alt="Логотип Идём в кино"></img>
          </a>
        </div>
        <button className={styles.btn}>Войти</button>
      </div>
    </header>
  );
}
