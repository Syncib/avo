import React from "react";
import "./Work.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../../components/Footer";
import WorkSection from "../../sections/WorkSection";
const Work = () => {
  return (
    <div className="overflow-hidden">
      <div className="work-page">
        <Navbar />
        <div className="position-relative container wrk-sec">
          <div className="d-flex align-items-center pb-3">
            <Link to="/">HOME</Link>
            <FaChevronRight color="red" />
            <Link to={"/work"}>WORK</Link>
            <FaChevronRight color="red" />
          </div>
          <h1 className="white wrk-herohead">WORK</h1>
        </div>
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <div className="workpage-section">
        <WorkSection />
      </div>
      <div className="d-flex gap-1 container justify-content-center my-5 pagination">
        <div className="text-center"><FaChevronLeft/></div>
        <div className="text-center">1</div>
        <div className="text-center">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
        <div className="text-center">5</div>
        <div className="text-center"><FaChevronRight/></div>
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

export default Work;
