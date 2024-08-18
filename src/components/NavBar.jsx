import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import "../styles/navbar.css"


function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/mentor">Mentors</NavLink>
                <NavLink to="/goals">Goals</NavLink>
                <NavLink to="/favorite">Favorite</NavLink>
            </div>
            <div>
                <NavLink to="/chat">
                    <IconButton>
                        <ForumIcon className='icon' />
                    </IconButton>
                </NavLink>
                <NavLink to="/user">
                    <IconButton>
                        <PersonIcon className="icon" />
                    </IconButton>
                </NavLink>
            </div>
            
        </nav>
    );
};

export default NavBar;
