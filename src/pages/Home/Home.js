import React from "react";
import Navbar from "../../components/Navbar";
import MyCarousel from "../../components/MyCarousel";
import WorkSection from "../../sections/WorkSection";
import AboutSection from "../../sections/AboutSection";
import ClientReview from "../../sections/ClientReview";
import "./Home.css";
import MyBlogs from "../../components/MyBlogs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home-div">
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
      <WorkSection />
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <ClientReview />
      <div className="get-estimate container">
        <div className="estimated-div">
          <h2 className="red about-para">Get Started</h2>
          <h1 className="estimate-heading white">
            Fill in the brief and get the project estimate
          </h1>
          <p className="about-para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="btn btn-danger slide-text-btn px-3">
            Get started
          </button>
        </div>
      </div>
      <div className="d-flex">
        <div className="about-design1"></div>
        <div className="about-design2"></div>
      </div>
      <div className="blog-section">
        <div className="container">
          <h1 className="nunito-sans-900 text-center mb-5">RECENT BLOG</h1>
          <MyBlogs />
        </div>
      </div>
      <div className="footer-section bg-black">
      <div className="d-flex">
        <div className="design1" style={{ backgroundColor: "black" }}></div>
        <div className="design2" style={{ backgroundColor: "black" }}></div>
      </div>
      <Footer/>
      </div>
   
    </div>
  );
};

export default Home;
