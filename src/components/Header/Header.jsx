import style from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import Button from "../UI/button/Button";

const Header = () => {
  return (
    <header className={style.header}>
        <a href="#" className={style.logo}>
          <img src={logo} alt="logo-icon" />
          <h3>NFT Marketplace</h3>
        </a>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Rankings</a>
          </li>
          <li>
            <a href="#">Connect a wallet</a>
          </li>
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </header>
  );
};

export default Header;
