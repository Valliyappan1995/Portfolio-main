import { Link } from "react-scroll";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="nav-bar navbar navbar-expand-lg bg-body-tertiary">
      <div className="nav-container">
        <div className="h1-top">
          <div className="h1-logo">
            <Link to="home" smooth={true} duration={500} className="h1-link">
              <span>V</span>alliyappan
            </Link>
          </div>
          <div className="nav-toggler">
            <span></span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-list navbar-nav">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link active"
                aria-current="page"
              >
                <i className="fa-solid fa-house"></i>&nbsp; &nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <i className="fa-solid fa-user"></i>&nbsp; &nbsp;About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <i className="fa-solid fa-school"></i>&nbsp; &nbsp;Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <i className="fa-solid fa-bars-progress"></i>&nbsp;
                &nbsp;Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <i className="fa-solid fa-sliders"></i>&nbsp; &nbsp;Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <i className="fa-solid fa-phone"></i>&nbsp; &nbsp;Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
