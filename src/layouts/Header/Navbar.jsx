import { NavLink, useParams } from 'react-router-dom';
import { MAIN_NAV_LINKS, SECONDARY_NAV_LINKS } from '../../constants/navigationRoutes';

const Navbar = () => {
  const { clientId } = useParams();

  const navLinks = clientId ? SECONDARY_NAV_LINKS(clientId) : MAIN_NAV_LINKS;

  return (
    <nav className="sidebar-navbar global-navbar d-flex d-flex-space-between my-5">
      <div className="nav-links d-flex gap-10">
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) => 
              isActive ? 'button-secondary active' : 'button-primary'
            }
            key={link.path}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <button className="logout-btn button-dark">Logout</button>
    </nav>
  );
};

export default Navbar;
