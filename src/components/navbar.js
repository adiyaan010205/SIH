// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Kamyabi.com</h2>
      <div style={styles.navLinks}>
        <Link style={styles.navLink} to="/">Overview</Link>
        <Link style={styles.navLink} to="/score">Score</Link>
        
        <Link style={styles.navLink} to="/courses">Courses</Link> {/* New link */}
        <Link style={styles.navLink} to="/course-career">Carrers</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#6a1b9a',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5em',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2em',
  },
};

export default Navbar;
