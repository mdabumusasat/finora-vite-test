import React from "react";
import { Link } from "react-router-dom";
import Team1Img1 from "../assets/images/resource/team1-1.jpg";
import Team1Img2 from "../assets/images/resource/team1-2.jpg";
import Team1Img3 from "../assets/images/resource/team1-3.jpg";
import Team1Img4 from "../assets/images/resource/team1-4.jpg";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "James Carter",
      designation: "Senior Cleaning",
      image: Team1Img1,
    },
    {
      id: 2,
      name: "Jerome Bell",
      designation: "Senior Cleaning",
      image: Team1Img2,
    },
    {
      id: 3,
      name: "Wade Warren",
      designation: "Senior Cleaning",
      image: Team1Img3,
    },
    {
      id: 4,
      name: "Darlene Robertson",
      designation: "Senior Cleaning",
      image: Team1Img4,
    },
  ];

  return (
    <section className="teams-section pb-100">
      <div className="container">
        <div className="row g-24">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-md-6"
            >
              <div className="team-block">
                <div className="inner-block">
                  <div className="image">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="content">
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
          ))}
        </div>
      </div>
    </section>
  );
}