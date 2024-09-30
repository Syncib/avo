import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg nunito-sans-regular custom-position ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to={"/"} className="navbar-brand fw-bold avo">
          <span className="white">a</span>
          <span className="red">v</span>
          <span className="white">o</span>
        </Link>
        <button 
          className="navbar-toggler nav-menu" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
         MENU
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link trans">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link trans">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/work" className="nav-link trans">WORK</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link trans">BLOG</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link trans">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
