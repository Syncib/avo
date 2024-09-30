import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../../components/Footer";
import MyBlogs from "../../components/MyBlogs";
import image1 from "../../assets/images/image_1.webp";
import image2 from "../../assets/images/image_2.webp";
import image3 from "../../assets/images/image_3.webp";
import image4 from "../../assets/images/image_4.webp";
import image5 from "../../assets/images/image_5.webp";
import image6 from "../../assets/images/image_6.webp";
import image7 from "../../assets/images/image_7.webp";
import image8 from "../../assets/images/image_8.webp";
import "./Blog.css";
import SlideFadeIn from "../../components/SlideFadeIn";

const Blog = () => {
  const blogImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className="overflow-hidden">
      <div className="blog-page">
        <Navbar />
        <div className="position-relative container blog-sec">
          <div className="d-flex align-items-center pb-3">
            <Link to="/">HOME</Link>
            <FaChevronRight color="red" />
            <Link to={"/blog"}>BLOG</Link>
            <FaChevronRight color="red" />
          </div>
          <SlideFadeIn>
            <h1 className="white blog-herohead">BLOG</h1>
          </SlideFadeIn>
        </div>
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <div className="blogpage-section container">
        <MyBlogs blogData={blogImages} />
      </div>
      <div className="d-flex gap-1 container justify-content-center my-5 pagination">
        <div className="text-center">
          <FaChevronLeft />
        </div>
        <div className="text-center">1</div>
        <div className="text-center">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
        <div className="text-center">5</div>
        <div className="text-center">
          <FaChevronRight />
        </div>
      </div>
      <div className="footer-section bg-black">
        <div className="d-flex">
          <div className="design1" style={{ backgroundColor: "black" }}></div>
          <div className="design2" style={{ backgroundColor: "black" }}></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
