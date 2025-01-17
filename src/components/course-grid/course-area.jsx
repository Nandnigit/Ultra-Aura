import our_course_data from "@/src/data/our-course-data";
import Link from "next/link";
import React from "react";

const CourseArea = () => {
  return (
    <>
      <section className="course-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-65">
                {/* <span className="tp-sub-title-box mb-15">Our Courses</span> */}
                <h2 className="tp-section-title mb-20">
                  Explore Courses
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb-20">
            {our_course_data.slice(0, 9).map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tpcourse mb-40 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
                  <div className="tpcourse__thumb p-relative w-img fix">
                    <Link href="/course-details">
                      <img src={item.img} alt="course-thumb" />
                    </Link>
                    <div className="tpcourse__tag">
                      <Link href="/course-details">
                        <i className="fi fi-rr-heart"></i>
                      </Link>
                    </div>
                    <div className="tpcourse__img-icon">
                      <img src={item.icon} alt="course-avata" />
                    </div>
                  </div>
                  <div className="tpcourse__content-2">
                    <div className="tpcourse__category mb-10">
                      <ul className="tpcourse__price-list d-flex align-items-center">
                        <li>
                          <Link
                            className={item.ct_color}
                            href="/course-details"
                          >
                            {item.course_title}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={item.cn_color}
                            href="/course-details"
                          >
                            {item.course_name}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__ava-title mb-15">
                      <h4 className="tpcourse__title tp-cours-title-color">
                        <Link href="/course-details">{item.title}</Link>
                      </h4>
                    </div>
                    <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                      <ul className="d-flex align-items-center">
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.cls_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />{" "}
                          <span>{item.st_text}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                      <div className="tpcourse__rating-icon">
                        <span>4.7</span>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-ss-star"></i>
                        <i className="fi fi-rs-star"></i>
                        <p>(125)</p>
                      </div>
                      <div className="tpcourse__pricing">
                        <h5 className="price-title">$0.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="basic-pagination">
            <nav>
              <ul>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-left"></i>
                  </Link>
                </li>
                <li>
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="far fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default CourseArea;
