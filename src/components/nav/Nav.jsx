import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-link">
      <NavLink to="/">Blogs Dashboard</NavLink>
      <NavLink to="/add">Add Blog</NavLink>
    </div>
  );
}

export default Nav;
