import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>About pages</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        exercitationem eligendi dicta tempore excepturi repudiandae, assumenda
        earum fuga. Maiores quo aliquid, dicta rem nobis assumenda sequi aperiam
        explicabo numquam quam.
      </p>
      <ul>
        <li>
          <NavLink to="mission">mission</NavLink>
        </li>
        <li>
          <NavLink to="team">team</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
