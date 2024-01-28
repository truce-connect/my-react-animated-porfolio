import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navicon1 from "../assets/img/nav-icon1.svg";
import navicon2 from "../assets/img/nav-icon2.svg";
import navicon3 from "../assets/img/nav-icon3.svg";

const MYNavbar = () => {
  const [activelink, setactivelink] = useState("home");
  const [scooled, setscrolled] = useState(false);
  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener[("scroll", onscroll)];
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setactivelink(value);
  };
  return (
    <div>
      <Navbar expand="lg" className={ scooled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon "></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activelink === "home" ? "active navbar-link" : "navbar-link"
                }
                onclick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activelink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onclick={() => onUpdateActiveLink("skills")}
              >
                skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activelink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onclick={() => onUpdateActiveLink("projects")}
              >
                projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navicon1} alt="" />
                </a>
                <a href="#">
                  <img src={navicon2} alt="" />
                </a>
                <a href="#">
                  <img src={navicon3} alt="" />
                </a>
              </div>
              <button className="vvd" onclick ={() => console.log("let connect")}><span>let connect</span > </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default MYNavbar;
