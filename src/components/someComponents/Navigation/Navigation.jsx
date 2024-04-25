import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const activePageClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.nav}>
      <NavLink className={activePageClass} to="/">
        Home
      </NavLink>
      <NavLink className={activePageClass} to="/movies">
        Movies
      </NavLink>
    </div>
  );
}
