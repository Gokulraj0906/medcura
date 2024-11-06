import React, { useState} from 'react';
// import { useNavigate } from 'react-router-dom';
//import logo from './logo.png'; // Import the logo image here

const MyNavbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
//   const navigate = useNavigate();

  const toggleNavbarVisibility = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };


  return (
    <>
      <header id="navbar">
        <nav className="navbar-container container">
          <a href="/home" className="home-link">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBbdw5rGLbfhU_bdHiPpl_HqYvdabmNlZeA&s' alt="Medcura Logo" className="navbar-logo" />
            MedCura
          </a>
          <button
            type="button"
            id="navbar-toggle"
            aria-controls="navbar-menu"
            aria-label="Toggle menu"
            aria-expanded={isNavbarExpanded}
            onClick={toggleNavbarVisibility}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            id="navbar-menu"
            aria-labelledby="navbar-toggle"
            className={isNavbarExpanded ? 'expanded' : ''}
          >
            <ul className="navbar-links">
              <li className="navbar-item">
                <a className="navbar-link" href="#home">Home</a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#about-us">About Us</a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#contact-us">Contact Us</a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/upload">Upload</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <style>
        {`
          :root {
            --navbar-bg-color: #6689a4;
            --navbar-text-color: white;
            --navbar-text-color-focus: white;
          }


          body {
            height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            gap: 1.4rem;
          }

          .container {
            max-width: 1000px;
            padding-left: 1.4rem;
            padding-right: 1.4rem;
            margin-left: auto;
            margin-right: auto;
          }

          #navbar {
            --navbar-height: 64px;
            position: fixed;
            height: var(--navbar-height);
            background-color: #0a4575;
            margin: 15px;
            border-radius: 25px;
            left: 0;
            right: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
            z-index: 100;
          }

          .navbar-container {
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
          }

          .navbar-item {
            margin: 0.4em;
          }

          .home-link,
          .navbar-link {
            color: var(--navbar-text-color);
            text-decoration: none;
            display: flex;
            font-weight: 400;
            align-items: center;
          }

          .home-link:is(:focus, :hover),
          .navbar-link:is(:focus, :hover) {
            color: var(--navbar-text-color-focus);
            background-color: var(--navbar-bg-contrast);
          }

          .navbar-logo {
            width: 40px; /* Adjust the logo size */
            height: 40px;
            margin-right: 0.5em;
            border-radius: 25px;
          }

          #navbar-toggle {
            cursor: pointer;
            border: none;
            background-color: transparent;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .icon-bar {
            display: block;
            width: 25px;
            height: 4px;
            margin: 2px;
            background-color: var(--navbar-text-color);
          }

          #navbar-toggle:is(:focus, :hover) .icon-bar {
            background-color: var(--navbar-text-color-focus);
          }

          #navbar-toggle[aria-expanded="true"] .icon-bar:is(:first-child, :last-child) {
            position: absolute;
            margin: 0;
            width: 30px;
          }

          #navbar-toggle[aria-expanded="true"] .icon-bar:first-child {
            transform: rotate(45deg);
          }

          #navbar-toggle[aria-expanded="true"] .icon-bar:nth-child(2) {
            opacity: 0;
          }

          #navbar-toggle[aria-expanded="true"] .icon-bar:last-child {
            transform: rotate(-45deg);
          }

          #navbar-menu {
            position: fixed;
            top: var(--navbar-height);
            bottom: 0;
            opacity: 0;
            visibility: hidden;
            left: 0;
            right: 0;
            z-index: 101;
          }

          #navbar-menu.expanded {
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 1;
            visibility: visible;
          }

          .navbar-links {
            list-style: none;
            background-color: var(--navbar-bg-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            left: 0;
            right: 0;
            margin: 1.4rem;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          }

          @media screen and (min-width: 700px) {
            #navbar-toggle {
              display: none;
            }

            #navbar-menu {
              visibility: visible;
              opacity: 1;
              position: static;
              display: block;
              z-index: 0;
            }

            .navbar-links {
              flex-direction: row;
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default MyNavbar;
