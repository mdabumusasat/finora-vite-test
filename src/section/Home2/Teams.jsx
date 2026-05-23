import React from "react";
import { Link } from "react-router-dom";
import Shape5 from "../../assets/images/icons/shape5.png";
import Team1 from "../../assets/images/resource/team3-1.png";
import Team2 from "../../assets/images/resource/team3-2.png";
import Team3 from "../../assets/images/resource/team3-3.png";
import Team4 from "../../assets/images/resource/team3-4.png";

const teamMembers = [
  {
    image: Team1,
    name: "James Carter",
    designation: "Senior Cleaning",
    pullUp: true,
  },
  {
    image: Team2,
    name: "Dianne Russell",
    designation: "Senior Cleaning",
    pullUp: false,
  },
  {
    image: Team3,
    name: "Floyd Miles",
    designation: "Senior Cleaning",
    pullUp: true,
  },
  {
    image: Team4,
    name: "Annette Black",
    designation: "Senior Cleaning",
    pullUp: false,
  },
];

const TeamSectionLayout2 = () => {
  return (
    <section className="teams-section-two pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-8 col-md-10">
            <div className="sec-title-outer">
              <div className="sec-title">
                <div className="sub-title">Our Team</div>
                <div className="h2 title">
                  The Faces Behind Our <br className="d-none d-xxxl-block" />
                  Trusted Services
                </div>
              </div>
              <div className="text-box">
                <div className="shape animation__rotateY">
                  <img src={Shape5} alt="Shape" />
                </div>
                <div className="text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
              </div>
              <Link
                to="/page-team-details"
                className="btn-style-one">
                <span className="left-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
                <span className="btn-title">
                  Discover More
                </span>
                <span className="right-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1">
            <div className="row g-24">
              {teamMembers.map((member, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className={`team-block-two ${
                      member.pullUp ? "pull-up" : ""
                    }`}>
                    <div className="inner-block">
                      <div className="image">
                        <img
                          src={member.image}
                          alt={member.name}
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="info">
                            <div className="h5 title">
                              <Link to="/page-team-details">
                                {member.name}
                              </Link>
                            </div>
                            <div className="designation">
                              {member.designation}
                            </div>
                          </div>
                          <div className="socials-icon-box">
                            <div className="share-icon">
                              <i className="fa-solid fa-share"></i>
                            </div>
                            <div className="socials-icon">
                              <Link to="#">
                                <i className="fa-brands fa-facebook-f"></i>
                              </Link>
                              <Link to="#">
                                <i className="fa-brands fa-twitter"></i>
                              </Link>
                              <Link to="#">
                                <i className="fa-brands fa-youtube"></i>
                              </Link>
                              <Link to="#">
                                <i className="fa-brands fa-pinterest-p"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionLayout2;