import AstroLogo from "/black-hole.svg";
import {Link} from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ links }) {
  console.log(links);
  const navStyles = {
    backgroundColor: "rgba(36, 9, 90, .4",
  };

  return (
    <nav className="nav-container" style={navStyles}>
      <img className="nav-logo" src={AstroLogo} alt="space-app logo"></img>
      <div className="links-container">
        {links.map((item) => (
          <Link key={item.id} to={item.href}>
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
