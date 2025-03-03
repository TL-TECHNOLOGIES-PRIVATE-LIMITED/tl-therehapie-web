import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

import img01 from "../../assets/img/blog/blog2/blog1.jpg";
import img02 from "../../assets/img/blog/blog2/blog2.jpg";
import img03 from "../../assets/img/blog/blog2/blog3.jpg";
import img04 from "../../assets/img/blog/blog2/blog4.jpg";
import img05 from "../../assets/img/blog/blog2/blog5.jpg";
// import img06 from "../../assets/img/blog/blog2/blg6.jpg";
import { Link } from "react-router-dom";

export const BlogTwo = () => {
  const swiper_blog_settings = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 60,
    loop: true,
    freeMode: true,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  const blogPosts = [
    {
      imgSrc: img01,
      author: "heREHApie Consultants",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "The Future of Rehabilitation",
      tagline: " How Technology is Transforming Patient Recovery"
    },
    {
      imgSrc: img02,
      author: "heREHApie Consultants",
      date: "March 5, 2024",
      href: "/blog-details",
      title: "Choosing the Right Rehabilitation Equipment",
     tagline: " A Buyer’s Guide for Healthcare Providers "
    },
    {
      imgSrc: img03,
      author: "heREHApie Consultants",
      date: "March 10, 2024",
      href: "/blog-details",
      title: "The Middle East: A Growing Market for Rehabilitation Technology",
     tagline: "Unlocking Opportunities: Navigating the Middle East Rehab Tech Market "
    },
    {
      imgSrc: img04,
      author: "heREHApie Consultants",
      date: "March 15, 2024",
      href: "/blog-details",
      title: "How to Optimize Your Rehabilitation Product Distribution Strategy",
     tagline: " Maximizing Reach, Enhancing Care: Optimize Your Rehab Product Distribution"
    },
    {
      imgSrc: img05,
      author: "heREHApie Consultants",
      date: "March 20, 2024",
      href: "/blog-details",
      title: "Overcoming Challenges in the Rehabilitation Industry",
     tagline: " A Manufacturer’s Perspective "
    },
    // {
    //   imgSrc: img06,
    //   author: "heREHApie Consultants",
    //   date: "June 21, 2024",
    //   href: "/blog-details",
    //   title: "The essential steps for business success",
    //  tagline: "Master the fundamentals of business success.Follow these essential steps to grow and thrive! "
    // },
  ];

  return (
    <div className="td-blog-area pt-135 pb-130 fix">
      <div className="container">
        <div className="row">
          {/* header */}
          <div className="col-12">
            <div
              className="td-blog-title-wrap mb-75 text-center wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Our Blogs</span>
              <h2 className="td-section-title mb-30">Insights That Matter</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="td-blog-slider-wrap">
              <div className="swiper-container td-blog-slider-active">
                <div className="swiper-wrapper">
                  <Swiper {...swiper_blog_settings}>
                    {blogPosts.map((post, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="swiper-slide wow slideInDown"
                          data-wow-delay={`.${index + 3}s`}
                          data-wow-duration="1s"
                        >
                          <div className="td-blog-content">
                            <div className="td-blog-thumb mb-30">
                              <img
                                className="w-100"
                                src={post.imgSrc}
                                alt="blog"
                              />
                            </div>
                            <div className="td-blog-meta-2 mb-15">
                              <span className="td-blog-2-tag">{post.author}</span>
                              <span className="dvdr">/</span>
                              <span>{post.date}</span>
                            </div>
                            <h2 className="td-blog-title td-blog-title-2">
                              <Link to={post.href}>{post.title}</Link>
                            </h2>
                            <p className="td-blog-tagline">
                              <Link to={post.href}>{post.tagline}</Link>
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
