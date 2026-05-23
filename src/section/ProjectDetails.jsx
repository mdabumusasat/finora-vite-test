import React from "react";
import { Link } from "react-router-dom";
import ProjectImg1 from "../assets/images/resource/project-details-1.jpg";
import ProjectImg2 from "../assets/images/resource/project-details-2.jpg";
import ProjectImg3 from "../assets/images/resource/project-details-3.jpg";
import ProjectImg4 from "../assets/images/resource/project-details-4.jpg";
import PaginationBar from "../assets/images/resource/pagination-bar.png";

export default function ProjectDetailsSection() {
  return (
    <section className="project-details pt-120 pb-70">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 mb-5 mb-lg-0">
            <div className="sec-title black mb-40">
              <div className="sec-sub-title">
                <div className="h6 sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  About The Project
                </div>
              </div>

              <div className="h2 title tx-title sec_title tz-itm-title tz-itm-anim mb-20">
                Deeper Dive into Our Digital Product Design Masterpieces
              </div>

              <p
                className="text wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                Sed ut perspiciatis unde omnis iste natus voluptatem
                accusantium rem aperiam eaque ipsa quae ab illo inventore
                veritatis quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit
                aut fugit sed quia consequuntur.
              </p>
            </div>

            <div className="project-details-btn">
              <Link
                to="/page-project-details"
                className="btn-style-one"
              >
                <span className="left-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
                <span className="btn-title">Visit Website</span>
                <span className="right-arrow">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>

          <div className="col-xl-3 offset-xl-1 col-lg-4">
            <div className="project-details__content-right mt-0">
              <div className="project-details__details-box rounded-0">
                <ul className="list-unstyled project-details__details-list">
                  <li>
                    <div className="h4 project-details__name mb-2">
                      Clients
                    </div>
                    <p className="project-details__client">
                      Design Studio In USA
                    </p>
                  </li>

                  <li>
                    <div className="h4 project-details__name mb-2">
                      Project Type
                    </div>
                    <p className="project-details__client">
                      Digital Product Design
                    </p>
                  </li>

                  <li>
                    <div className="h4 project-details__name mb-2">
                      Date
                    </div>
                    <p className="project-details__client">
                      25 October 2026
                    </p>
                  </li>

                  <li>
                    <div className="h4 project-details__name mb-2">
                      Website
                    </div>
                    <div className="project-details__client">
                      <Link to="/">yourdomain.com</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="row mb-5 mb-lg-0">
          <div className="col-lg-4 col-md-6">
            <div className="project-details__top mt-5">
              <div className="project-details__img">
                <img
                  className="rounded-0"
                  src={ProjectImg1}
                  alt="Project"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-6">
            <div className="project-details__top mt-5">
              <div className="project-details__img">
                <img
                  className="rounded-0"
                  src={ProjectImg2}
                  alt="Project"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Development Facts */}
        <div className="row align-items-lg-center">
          <div className="col-lg-6">
            <div className="sec-title black mb-40">
              <div
                className="h2 title mb-30 wow splt-txt"
                data-splitting
              >
                Interesting facts in <br className="d-none d-lg-block" />
                Development
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-details__top mt-lg-5">
              <div className="text mb-40">
                Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
              </div>

              <ul className="project-list mb-5">
                <li className="d-flex align-items-center">
                  <i className="icon fa-classic fa-solid fa-check fa-fw"></i>
                  Efficient Sprint Planning
                </li>

                <li className="d-flex align-items-center">
                  <i className="icon fa-classic fa-solid fa-check fa-fw"></i>
                  Standups and Demos
                </li>

                <li className="d-flex align-items-center">
                  <i className="icon fa-classic fa-solid fa-check fa-fw"></i>
                  Iterative Delivery Approach
                </li>

                <li className="d-flex align-items-center">
                  <i className="icon fa-classic fa-solid fa-check fa-fw"></i>
                  Problem-solving
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-5 mb-lg-0" />

        {/* Results */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sec-title black mb-40">
              <div className="h2 title mb-30 wow splt-txt">
                The Results of <br className="d-none d-lg-block" />
                Our Project
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-details__top mt-lg-5">
              <div className="text mb-40">
                Will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rejects, dislikes, or avoids pleasure
              </div>

              <div className="project-list-item mb-5">
                <div className="h5 title">
                  <i className="icon fa-solid fa-circle-check fa-fw mr-15"></i>
                  Support clients
                </div>
                <div className="text">
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore
                </div>
              </div>

              <div className="project-list-item">
                <div className="h5 title">
                  <i className="icon fa-solid fa-circle-check fa-fw mr-15"></i>
                  Solve problems
                </div>
                <div className="text">
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Images */}
        <div className="row">
          <div className="col-md-6">
            <div className="project-details__top mt-5">
              <div className="project-details__img">
                <img
                  className="rounded-0"
                  src={ProjectImg3}
                  alt="Project"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="project-details__top mt-5">
              <div className="project-details__img">
                <img
                  className="rounded-0"
                  src={ProjectImg4}
                  alt="Project"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__pagination-box">
              <ul className="project-details__pagination list-unstyled">
                <li className="next text-start">
                  <div className="content">Previous</div>
                  <div className="h4 title">
                    <Link to="#">
                      Business Website Design
                    </Link>
                  </div>
                </li>

                <li className="count">
                  <Link to="#">
                    <img
                      src={PaginationBar}
                      alt="Pagination"
                    />
                  </Link>
                </li>

                <li className="previous text-end">
                  <div className="content">Next</div>
                  <div className="h4 title">
                    <Link to="#">
                      Mobile Application Design
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}