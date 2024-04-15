import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>404 Not Found</p>
      <NavLink to="/">Go home page</NavLink>
    </div>
  );
}
