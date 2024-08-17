import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/mentor">Mentors</NavLink>
        </nav>
    );
};

export default NavBar;
