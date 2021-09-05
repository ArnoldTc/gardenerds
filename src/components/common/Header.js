import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setscrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const scrollHandler = () => setscrollPosition(window.scrollY);

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      className={[styles.navbarBottom, styles.navbar]}
      expand="md"
      fixed="top"
      bg={scrollPosition > 200 ? 'dark' : 'transparent'}
      variant="dark"
    >
      <Navbar.Brand href="/">
        <p className={styles.brand}>Gardenerds</p>
      </Navbar.Brand>
      <Nav className={styles.navline}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('about').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                offsetTop: 200,
              });
            }}
          >
            <span className={styles.links}>Rólunk</span>
          </Nav.Link>
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('design').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            <span className={styles.links}>Tervezés</span>
          </Nav.Link>
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('execute').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            <span className={styles.links}>Kivitelezés</span>
          </Nav.Link>
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('lighting').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            <span className={styles.links}>Világítás</span>
          </Nav.Link>
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('maintenance').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            <span className={styles.links}>Karbantartás</span>
          </Nav.Link>
          <Nav.Link
            className={styles.headerBtn}
            onClick={() => {
              setExpanded(false);
              document.getElementById('furnitures').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }}
          >
            <span className={styles.links}>Kerti bútorok és kiegészítők</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Nav>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.toggleBtn}
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
    </Navbar>
  );
}
export default Header;
