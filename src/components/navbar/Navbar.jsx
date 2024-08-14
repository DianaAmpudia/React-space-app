import AstroLogo from "/black-hole.svg";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar({ links }) {
  console.log(links);

  return (
    <nav className="nav-container">
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


export default Navbar;
