import React from "react";
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/images/resource/404.jpg';

const Error = () => {
    return (
        <>
        <section className="">
          <div className="auto-container pt-120 pb-70">
            <div className="row">
              <div className="col-xl-12">
                <div className="error-page__inner">
                  <div className="error-page__title-box">
                    <img src={ErrorImage} alt=""/>
                    <div className="h3 error-page__sub-title">Page not found!</div>
                  </div>
                  <p className="error-page__text">Sorry we can't find that page! The page you are looking <br /> for
                    was never existed.</p>
                  <form className="error-page__form">
                    <div className="error-page__form-input">
                      <input type="search" placeholder="Search here"/>
                      <button type="submit"><i className="lnr lnr-icon-magnifier"></i></button>
                    </div>
                  </form>
                  <Link to="/" className="btn-style-one">
                    <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                    <span className="btn-title">Back to Home</span>
                    <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default Error;