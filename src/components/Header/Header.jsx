import logo from "../../assets/linx logo.png";
import style from "./Header.module.css";

export default function Header() {
  return (
    <nav className={style.menu}>
      <h1>Serviço fora de escopo - Linx Degust </h1>
      <img src={logo} alt="linx logo" height={58} width={105} />
    </nav>
  );
}
