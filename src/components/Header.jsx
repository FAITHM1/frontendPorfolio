import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    backgroundColor: "rgb(206,201,203)",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div>HOME</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <div>About</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/projects">
          <div>Projects</div>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
