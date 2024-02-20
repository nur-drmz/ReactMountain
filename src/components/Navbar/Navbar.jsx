import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
      <img className={styles.logo} src={getImageUrl("nav/Mark.png")} alt="logo" onClick={() => window.location.href = "/"} />
      <a className={styles.title} href="/">
        Beau Mountain
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#package">Package</a></li>
          <li><a href="#ticket">Ticket</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
      <img className={styles.Youtube} src={getImageUrl("nav/Button.png")} alt="Youtube" onClick={() => window.location.href = "/"} />

      </div>
    </nav>
  );
};
