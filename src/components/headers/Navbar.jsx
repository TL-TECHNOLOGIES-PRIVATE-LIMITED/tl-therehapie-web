import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ hidePortfolio = false }) => {
  return (
    <nav className="td-main-menu-content  " style={{textAlign:"start",width:"100%"}}>
      <ul className="" style={{marginLeft:"10px",width:"100%",display:"flex",justifyContent:"center"}}>
        <li className="" >
          <Link to="/"> Home</Link>
          {/* <ul className="td-submenu submenu">
            <li>
              <Link to="/">Main Home</Link>
            </li>
            <li>
              <Link to="/home2">Business Home</Link>
            </li>
            <li>
              <Link to="/home3">Advisory Home</Link>
            </li>
            <li>
              <Link to="/home4">Business Strategy</Link>
            </li>
            <li>
              <Link to="/home5">Insurance Home</Link>
            </li>
          </ul> */}
        </li>
        <li className="">
          <Link to="/about"> About</Link>
          
        </li>

        {/* <li className="">
          <a href="#">Pages</a>
          <ul className="td-submenu submenu">
           
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/portfolio-details">Portfolio Details</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/team-details">Team Details</Link>
            </li>
          
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
        </li> */}
          <li>
              <Link to="/blog">Blog</Link>
            </li>
        {/* <li className="">
          <Link to="/blog">Blog</Link>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li> */}

        <li className="">
          <Link to="/service"> Services</Link>
          
        </li>
        {/* <li className="">
          <Link to="/service">Featured</Link>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/service-details">Service Details</Link>
            </li>
          </ul>
        </li> */}
        <li className="">
          <Link to="/faq"> Faq</Link>
          
        </li>

        {hidePortfolio ? null : (
          <li className="">
            <Link to="/portfolio">Portfolio</Link>
            <ul className="td-submenu submenu">
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Portfolio Details</Link>
              </li>
            </ul>
          </li>
        )}

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
