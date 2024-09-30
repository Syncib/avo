import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaChevronRight } from "react-icons/fa";
import AboutSection from "../../sections/AboutSection";
import EstimatedPort from "../../components/EstimatedPort";
import TeamCard from "../../components/TeamCard";
import team1 from "../../assets/images/team-1.jpg.webp";
import team2 from "../../assets/images/team-2.jpg.webp";
import team3 from "../../assets/images/team-3.jpg.webp";
import team4 from "../../assets/images/team-4.jpg.webp";
import team5 from "../../assets/images/team-5.jpg.webp";
import team6 from "../../assets/images/team-6.jpg.webp";
import team7 from "../../assets/images/team-7.jpg.webp";
import team8 from "../../assets/images/team-8.jpg.webp";
import "./About.css";
import ClientReview from "../../sections/ClientReview";
import Footer from "../../components/Footer";
import SlideFadeIn from "../../components/SlideFadeIn";

const About = () => {
  const team = [
    { name: "JOHN WILSON", role: "Web Designer", img: team1 },
    { name: "ROBERT WILLS", role: "Web Developer", img: team2 },
    { name: "MIKE SMITH", role: "Graphic Designer", img: team3 },
    { name: "ADRIAN HENDERSON", role: "System Analyst", img: team4 },
    { name: "JOHN WILSON", role: "Web Programmer", img: team5 },
    { name: "ROBERT WILLS", role: "Web Designer", img: team6 },
    { name: "MIKE SMITH", role: "Graphic Designer", img: team7 },
    { name: "ADRIAN HENDERSON", role: "SEO", img: team8 },
  ];
  return (
    <div className="overflow-hidden">
      <div className="about-page">
        <Navbar />
        <div className="position-relative container ab-sec">
          <div className="d-flex align-items-center pb-3">
            <Link to="/">HOME</Link>
            <FaChevronRight color="red" />
            <Link to={"/about"}>ABOUT</Link>
            <FaChevronRight color="red" />
          </div>
          <h1 className="white ab-herohead">About Us</h1>
        </div>
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <AboutSection />
      <EstimatedPort />
      <div className="d-flex">
        <div className="about-design1"></div>
        <div className="about-design2"></div>
      </div>
      <div className="expert-team">
        <div class="container">
          <SlideFadeIn>
            <h1 className="nunito-sans-900 text-center mb-5">EXPERT TEAM</h1>
          </SlideFadeIn>
          <div className="row">
            {team.map((member, index) => (
              <div key={index} className="col-lg-3 team-member">
                 <SlideFadeIn>
                   <TeamCard teaminfo={member} />
                 </SlideFadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <ClientReview/>
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

export default About;
