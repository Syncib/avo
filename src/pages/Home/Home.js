import React from "react";
import Navbar from "../../components/Navbar";
import MyCarousel from "../../components/MyCarousel";
import WorkSection from "../../sections/WorkSection";
import AboutSection from "../../sections/AboutSection";
import ClientReview from "../../sections/ClientReview";
import MyBlogs from "../../components/MyBlogs";
import Footer from "../../components/Footer";
import EstimatedPort from "../../components/EstimatedPort";
import image1 from "../../assets/images/image_1.webp";
import image2 from "../../assets/images/image_2.webp";
import image3 from "../../assets/images/image_3.webp";
import image4 from "../../assets/images/image_4.webp";
import "./Home.css";
import SlideFadeIn from "../../components/SlideFadeIn";

const Home = () => {
  const blogImages = [image1, image2, image3, image4];
  return (
    <div className="overflow-hidden">
      <div className="position-relative hero-section">
        <Navbar />
        <MyCarousel />
        <div className="d-flex">
          <div className="design1"></div>
          <div className="design2"></div>
        </div>
      </div>
      <AboutSection />
      <div className="d-flex">
        <div className="about-design1"></div>
        <div className="about-design2"></div>
      </div>
      <div className="work-section">
        <WorkSection />
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <ClientReview />
      <EstimatedPort />
      <div className="d-flex">
        <div className="about-design1"></div>
        <div className="about-design2"></div>
      </div>
      <div className="blog-section">
        <div className="container">
          <SlideFadeIn>
            <h1 className="nunito-sans-900 text-center mb-5">RECENT BLOG</h1>
          </SlideFadeIn>
          <MyBlogs blogData={blogImages} />
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

export default Home;
