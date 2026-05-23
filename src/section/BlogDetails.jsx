import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsImage1 from '../assets/images/resource/news-details.jpg';
import BlogTestiImage1 from '../assets/images/resource/client-3.png';
import BlogTestiImage2 from '../assets/images/resource/client-2.png';
import BlogImage1 from '../assets/images/resource/blog1-1.jpg';
import BlogImage2 from '../assets/images/resource/blog1-2.jpg';
import BlogImage3 from '../assets/images/resource/blog1-3.jpg';

const BlogDetails = () => {
  return (
        <section className="blog-details pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                  <div className="blog-details__img">
                    <img src={BlogDetailsImage1} alt=""/>
                    <div className="blog-details__date">
                      <span className="day">28</span>
                      <span className="month">Aug</span>
                    </div> 
                  </div>
                  <div className="blog-details__content">
                    <ul className="list-unstyled blog-details__meta">
                      <li><Link to="/news-details"><i className="fas fa-user-circle"></i> Admin</Link> </li>
                      <li><Link to="/news-details"><i className="fas fa-comments"></i> 02 Comments</Link></li>
                    </ul>
                    <div className="h3 blog-details__title">The Future of Financial Consulting in a Digital Economy</div>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                    <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p>
                  </div>
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags"> <span>Tags</span> <Link to="/news-details">Business</Link> <Link to="/news-details">Agency</Link> </p>
                    <div className="blog-details__social-list">
                      <Link to="/news-details"><i className="fab fa-twitter"></i></Link>
                      <Link to="/news-details"><i className="fab fa-facebook"></i></Link>
                      <Link to="/news-details"><i className="fab fa-pinterest-p"></i></Link>
                      <Link to="/news-details"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </div>
                  <div className="nav-links">
                    <div className="prev"><Link to="/news-details" rel="prev">Bring to the table win-win survival strategies</Link></div>
                    <div className="next"><Link to="/news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link></div>
                  </div>
                  <div className="comment-one">
                    <div className="h3 comment-one__title">2 Comments</div>
                    <div className="comment-one__single">
                      <div className="comment-one__image"> <img src={BlogTestiImage1} alt=""/> </div>
                      <div className="comment-one__content">
                        <div className="h3">Kevin Martin</div>
                        <div className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</div>
                        <Link to="/news-details" className="btn-style-one comment-one__btn">Reply</Link>
                      </div>
                    </div>
                    <div className="comment-one__single">
                      <div className="comment-one__image"> <img src={BlogTestiImage2} alt=""/> </div>
                      <div className="comment-one__content">
                        <div className="h3">Sarah Albert</div>
                        <div className="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</div>
                        <Link to="/news-details" className="btn-style-one comment-one__btn">Reply</Link>
                      </div>
                    </div>
                    <div className="comment-form">
                      <div className="h3 comment-form__title mb-20">Leave a Comment</div>
                      <form id="contact_form">
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
                        <div className="mb-3">
                          <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
                        </div>
                        <div className="mb-3">
                          <input name="form_botcheck" className="form-control" type="hidden" value="" />
                          <button type="submit" className="btn-style-one" data-loading-text="Please wait...">
                            <span className="left-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                            <span className="btn-title">Submit Comment</span>
                            <span className="right-arrow"><i className="fa-regular fa-arrow-up-right"></i></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                      <input type="search" placeholder="Search here"/>
                      <button type="submit"><i className="lnr-icon-search"></i></button>
                    </form>
                  </div>
                  <div className="sidebar__single sidebar__post">
                    <div className="h3 sidebar__title">Latest Posts</div>
                    <ul className="sidebar__post-list list-unstyled">
                      <li>
                        <div className="sidebar__post-image"> <img src={BlogImage1} alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Funding Strategies for Early-Stage Businesses</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image"> <img src={BlogImage2} alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">How to Prepare Your Startup for Investors</Link> </div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__post-image"> <img src={BlogImage3} alt=""/> </div>
                        <div className="sidebar__post-content">
                          <div className="h3"> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>Admin</span> <Link to="/news-details">Budgeting Like a CFO: A Practical Guide</Link> </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__category">
                    <div className="h3 sidebar__title">Categories</div>
                    <ul className="sidebar__category-list list-unstyled">
                      <li><Link to="/news-details">Financial Planning<span className="lnr-icon-arrow-right"></span></Link> </li>
                      <li className="active"><Link to="/news-details">Investment<span className="lnr-icon-arrow-right"></span></Link></li>
                      <li><Link to="/news-details">Business Consulting<span className="lnr-icon-arrow-right"></span></Link> </li>
                      <li><Link to="/news-details">Corporate Finance<span className="lnr-icon-arrow-right"></span></Link> </li>
                      <li><Link to="/news-details">Risk Management<span className="lnr-icon-arrow-right"></span></Link> </li>
                      <li><Link to="/news-details">Wealth Management<span className="lnr-icon-arrow-right"></span></Link> </li>
                    </ul>
                  </div>
                  <div className="sidebar__single sidebar__tags">
                    <div className="h3 sidebar__title">Tags</div>
                    <div className="sidebar__tags-list">
                      <Link to="#">Finance</Link>
                      <Link to="#">Consulting</Link>
                      <Link to="#">Investment</Link>
                      <Link to="#">Strategy</Link>
                      <Link to="#">Growth</Link>
                      <Link to="#">Risk</Link>
                    </div>
                  </div>
                  <div className="sidebar__single sidebar__comments">
                    <div className="h3 sidebar__title">Recent Comments</div>
                    <ul className="sidebar__comments-list list-unstyled">
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box"><p>A wordpress commenter on <br /> launch new mobile app</p></div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box">
                          <p> <span>John Doe</span> on template:</p>
                          <div className="h5">comments</div>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box"><p>A wordpress commenter on <br /> launch new mobile app</p></div>
                      </li>
                      <li>
                        <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                        <div className="sidebar__comments-text-box">
                          <p> <span>John Doe</span> on template:</p>
                          <div className="h5">comments</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default BlogDetails;
