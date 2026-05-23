import React from "react";
import { Link } from "react-router-dom";
import TeamImg1 from "../../assets/images/resource/team1-1.jpg";
import TeamImg2 from "../../assets/images/resource/team1-2.jpg";
import TeamImg3 from "../../assets/images/resource/team1-3.jpg";
import TeamImg4 from "../../assets/images/resource/team1-4.jpg";

export default function TeamSection() {
  return (
        <section className="teams-section pb-0">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">Our Team</div>
              <div className="h2 title">The Faces Behind Our <br/>Trusted Servicess</div>
            </div>
            <div className="row g-24">
              <div className="col-xl-3 col-md-6">
                <div className="team-block">
                  <div className="inner-block">
                    <div className="image"><img src={TeamImg1} alt=""/></div>
                    <div className="content">
                      <div className="info">
                        <div className="h5 title"><Link to="/page-team-details">James Carter</Link></div>
                        <div className="designation">Senior Cleaning</div>
                      </div>
                      <div className="socials-icon-box">
                        <div className="share-icon"><i className="fa-solid fa-share"></i></div>
                        <div className="socials-icon">
                          <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                          <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                          <Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="team-block">
                  <div className="inner-block">
                    <div className="image"><img src={TeamImg2} alt=""/></div>
                    <div className="content">
                      <div className="info">
                        <div className="h5 title"><Link to="/page-team-details">Jerome Bell</Link></div>
                        <div className="designation">Senior Cleaning</div>
                      </div>
                      <div className="socials-icon-box">
                        <div className="share-icon"><i className="fa-solid fa-share"></i></div>
                        <div className="socials-icon">
                          <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                          <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                          <Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="team-block">
                  <div className="inner-block">
                    <div className="image"><img src={TeamImg3} alt=""/></div>
                    <div className="content">
                      <div className="info">
                        <div className="h5 title"><Link to="/page-team-details">Wade Warren</Link></div>
                        <div className="designation">Senior Cleaning</div>
                      </div>
                      <div className="socials-icon-box">
                        <div className="share-icon"><i className="fa-solid fa-share"></i></div>
                        <div className="socials-icon">
                          <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                          <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                          <Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="team-block">
                  <div className="inner-block">
                    <div className="image"><img src={TeamImg4} alt=""/></div>
                    <div className="content">
                      <div className="info">
                        <div className="h5 title"><Link to="/page-team-details">Darlene Robertson</Link></div>
                        <div className="designation">Senior Cleaning</div>
                      </div>
                      <div className="socials-icon-box">
                        <div className="share-icon"><i className="fa-solid fa-share"></i></div>
                        <div className="socials-icon">
                          <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                          <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                          <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                          <Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}