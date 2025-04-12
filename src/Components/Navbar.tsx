 
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/LexiEase.svg';

const NavbarSection = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path
      ? 'font-medium hover:text-white-600 transition bg-[#ef8354] hover:bg-orange-500 text-white py-1 px-4 rounded-sm'
      : 'font-medium hover:text-orange-500 transition';
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-[#2d3142] fixed top-0 w-full z-10">
      <div>
        <a href='/'><img src={Logo} alt="Logo" className="logo flex pl-3" /></a>
      </div>
      <nav className="flex space-x-6 mb-4 md:mb-0 text-sm">
        <ul className="text-white flex gap-10 pr-20">
          <li>
            <Link to="/" className={getLinkStyle('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkStyle('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/features" className={getLinkStyle('/features')}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/our-team" className={getLinkStyle('/our-team')}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkStyle('/contact')}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" className={getLinkStyle('/faq')}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavbarSection;
