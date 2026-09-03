import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/drks-logo.jpeg";
import { navigation } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link to="/" className="brand" aria-label="DRKS Alignment LLC — home">
          <img
            className="brand__logo"
            src={logo}
            alt="DRKS Alignment LLC — Strategy. Alignment. Results."
            width="785"
            height="910"
          />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="visually-hidden" style={{ position: "absolute", left: "-9999px" }}>
            {open ? "Close menu" : "Open menu"}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={open ? "nav is-open" : "nav"}
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav__link is-active" : "nav__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--navy nav__cta">
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
