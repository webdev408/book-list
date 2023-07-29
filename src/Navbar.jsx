import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          tekSkillDev
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/booklist">
              Book List
            </NavLink>
            <NavLink className="nav-link" to="/form">
              Form
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;