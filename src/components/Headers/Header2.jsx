import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo.png";
import StickyLogo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/logo2.png";
import MobileLogo2 from "../../assets/images/icons/sidebar-nav.png";

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {

    return (
    <>
    <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
      {/* <!-- Header Top --> */}
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            <ul className="list-style-one">
              <li><i className="fa-classic fa-solid fa-location-dot"></i> <Link to="#"> 1901 Thornridge Cir. Shiloh, Hawaii 81063</Link></li>
              <li><i className="fa-classic fa-solid fa-envelope"></i> <Link to="#"> Support@gmail.com</Link></li>
            </ul>
          </div>
          <div className="top-right">
            <div className="inner">
              <ul className="list-style-one">
                <li><i className="fa-solid fa-clock"></i> Mon - Fri:  9.00 am - 8.00pm </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top --> */}

      <div className="header-lower">
        <div className="inner-container">
          {/* <!-- Main box --> */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link to="/"><img src={MainLogo} alt="Logo" /></Link>
              </div>
            </div>

            {/* <!--Nav Box--> */}
            <div className="nav-outer">
              <nav className="nav main-menu">
                 <NavLinks />
              </nav>
            </div>
            {/* <!-- Main Menu End--> */}
          </div>

          {/* <!-- Outer Box --> */}
          <div className="outer-box">
            <ul className="list-style-one">
              <li><i className="fa-classic fa-solid fa-location-dot"></i> <Link to="#"> 1901 Thornridge Shiloh, Hawaii 81063</Link></li>
              <li className="line"></li>
              <li><i className="fa-classic fa-solid fa-phone-flip"></i> <Link to="#"> +92 3800 8060</Link></li>
            </ul>
            <Link to="/page-contact" className="btn-style-two">
              <span className="btn-title">Get In Touch</span>
            </Link>
            {/* <!-- Sidebar Nav --> */}
            <div className="sidebar-nav mobile-nav-toggler" onClick={handleOpen}>
              <img src={MobileLogo2} alt="" />
            </div>
            {/* <!-- Mobile Nav toggler --> */}
            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleRemove}/>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/"><img src={MobileLogo} alt="" title="" /></Link>
            </div>
            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"></i></div>
          </div>
          <ul className="navigation clearfix">
            <MobileMenu />
          </ul>
          <ul className="contact-list-one">
            <li>
              <i className="icon lnr-icon-phone-handset"></i>
              <span className="title">Call Now</span>
              <div className="text"><Link to="#">+92 (8800) - 98670</Link></div>
            </li>
            <li>
              <i className="icon lnr-icon-envelope1"></i>
              <span className="title">Send Email</span>
              <div className="text"><Link to="#">help@company.com</Link></div>
            </li>
            <li>
              <i className="icon lnr-icon-map-marker"></i>
              <span className="title">Address</span>
              <div className="text">66 Broklyant, New York India 3269</div>
            </li>
          </ul>
          <ul className="social-links">
            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}

      {/* <!-- Header Search --> */}
      <div className="search-popup">
        <span className="search-back-drop" onClick={handleToggle}/>
        <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
        <div className="search-inner">
          <form method="post" action="#">
            <div className="form-group">
              <input type="search" name="search-field" placeholder="Search..." />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Header Search --> */}

      {/* <!-- Sticky Header  --> */}
     <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
        <div className="container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/" title=""><img src={StickyLogo} alt="" title="" /></Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="nav-outer">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <NavLinks />
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sticky Menu --> */}
    </header>
    {/* <!-- End Main Header --> */}
    </>
    );
};

export default Header2;