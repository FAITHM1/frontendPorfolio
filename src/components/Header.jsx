import { Link } from "react-router-dom";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    // padding: "5px",
    width: "90%",
    margin: "auto",
  };
  const [openNav, setOpenNav] = useState();

  const handleToggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <header>
      <nav style={navStyle}>
        <h3>
          <span>Faith</span> Musa
        </h3>
        <p>
          {" "}
          <small>Menu</small>
          <i onClick={handleToggle} class="fas fa-bars"></i>{" "}
        </p>
      </nav>

      <Fade right>
        <div className={`menu ${openNav ? "showMenu" : ""}`}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div>HOME</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <div>About</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <div>Projects</div>
          </Link>
       <a href="https://docs.google.com/document/d/1DTST2TKF-ulYT8Cg19E3tpW_OjuOXCZLdLRUuafBmlQ/edit?usp=sharing">Resume</a>
        </div>
      </Fade>
    </header>
  );
}
export default Header;
