import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar-top.module.css";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { generateClasses } from "@/utilities/component_utils";
import { useState } from "react";
import PrimaryBtn from "@/ui/buttons/primary-btn";

export default function NavbarTop() {
  const [toggled, setIsToggled] = useState(false);

  function handleNavBarToggle() {
    setIsToggled((prevToggled) => !prevToggled);
  }

  return (
    <Navbar className={styles.navTop} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Beat Store</Navbar.Brand>
        <Nav>
          <button
            className={generateClasses(["navbar-toggler", styles.navToggleBtn])}
            type="button"
            data-toggle="collapse"
            data-target="#navbarLinksContainer"
            aria-controls="navbarLinksContainer"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavBarToggle}
          >
            <span className="dark-blue-text">
              <FaBars />
            </span>
          </button>
          <div
            id="navbarLinksContainer"
            className={generateClasses([
              styles.navLinksContainer,
              toggled ? styles.navLinksToggle : "",
            ])}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/beats">Beats</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about">Contact</Nav.Link>
            <div className={styles.loginBtnContainer}>
              <PrimaryBtn clickHandler={() => console.log("Log in")}>
                Log In
              </PrimaryBtn>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
