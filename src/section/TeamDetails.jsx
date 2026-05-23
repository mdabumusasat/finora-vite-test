import React from "react";
import { Link } from "react-router-dom";
import ProgressBar2 from '../lib/ProgressBar2';
import TeamDetailsImg from "../assets/images/resource/team-details.jpg";

const skills = [
  { title: "Tecnology", targetPercentage: 90 },
  { title: "Marketing", targetPercentage: 80 },
  { title: "Business", targetPercentage: 75 },
];

export default function TeamSection() {
  return (
        <>
        <section className="team-details">
          <div className="container pt-120 pb-100">
            <div className="team-details__top pb-70">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__top-left">
                    <div className="team-details__top-img"> <img src={TeamDetailsImg} alt=""/>
                      <div className="team-details__big-text"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-content">
                      <div className="h3 team-details__top-name">Aleesha Brown</div>
                      <p className="team-details__top-title mb-30">Managing Director & CEO</p>
                      <p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                      <div className="team-details-contact mb-30">
                        <div className="h5 mb-0">Email Address</div>
                        <div className=""><span>needhelp@yourdomain.com</span></div>
                      </div>
                      <div className="team-details-contact mb-30">
                        <div className="h5 mb-0">Phone Number</div>
                        <div className=""><span>+012-3456-789</span></div>
                      </div>
                      <div className="team-details-contact">
                        <div className="h5 mb-0">Web Address</div>
                        <div className=""><span>www.yourdomain.com</span></div>
                      </div>
                      <div className="team-details__social"> <Link to="#"><i className="fab fa-twitter"></i></Link> <Link to="#"><i className="fab fa-facebook"></i></Link> <Link to="#"><i className="fab fa-pinterest-p"></i></Link> <Link to="#"><i className="fab fa-instagram"></i></Link> </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-details__bottom pt-100">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__bottom-left">
                    <div className="h4 team-details__bottom-left-title">Personal Experience</div>
                    <p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__bottom-right">
                    <div className="team-details__progress">
                      {skills.map((skill) => (
                        <div
                          key={skill.title}
                          className="team-details__progress-single"
                        >
                          <h4 className="team-details__progress-title">
                            {skill.title}
                          </h4>
                          <ProgressBar2
                            targetPercentage={skill.targetPercentage}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-contact-form">
          <div className="container pt-120 pb-120">
            <div className="sec-title text-center">
              <div className="h2 section-title__title">Feel Free to Write Our <br /> Tecnology Experts</div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form id="contact_form" name="contact_form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-3 text-center">
                    <input name="form_botcheck" className="form-control" type="hidden" />
                    <button type="submit" className="btn-style-one mb-2 mb-sm-0" data-loading-text="Please wait...">
                      <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                      <span className="btn-title">Send message</span>
                      <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                    </button>
                    <button type="reset" className="btn-style-one ml-10" data-loading-text="Please wait...">
                      <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                      <span className="btn-title">Reset</span>
                      <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
  );
}