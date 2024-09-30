import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobeAmericas,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import "./Contact.css";
import SlideFadeIn from "../../components/SlideFadeIn";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div className="contact-page">
        <Navbar />
        <div className="position-relative container contact-sec">
          <div className="d-flex align-items-center pb-3">
            <Link to="/">HOME</Link>
            <FaChevronRight color="red" />
            <Link to={"/contact"}>CONTACT</Link>
            <FaChevronRight color="red" />
          </div>
          <SlideFadeIn>
              <h1 className="white contact-herohead">CONTACT</h1>
          </SlideFadeIn>
        </div>
      </div>
      <div className="d-flex">
        <div className="design1"></div>
        <div className="design2"></div>
      </div>
      <div className="contact-section container">
        <div className="text-center mb-5">
          <SlideFadeIn>
              <h2 className="contact-head">CONTACT US</h2>
          </SlideFadeIn>
          <SlideFadeIn>
              <h1 className="nunito-sans-900">HAVE A PROJECT?</h1>
          </SlideFadeIn>
          <SlideFadeIn>
              <p className="about-para">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
          </SlideFadeIn>
        </div>
        <div className="row justify-content-center gap-4 mx-2">
          <div className="col-12 col-lg-5">
            <form className="contact-form rounded">
              <div className="row mb-3 gap-3 gap-lg-0">
                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger px-5 py-3">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-2 d-flex flex-column text-nowrap conti gap-5">
            <SlideFadeIn>
                <div className="row">
                  <div className="col-8 bg-danger rounded-circle conico-bg text-center">
                    <FaMapMarkerAlt color="white" />
                  </div>
                  <div className="col-4">
                    <p>Address:</p>
                    <p className="about-para">
                      198 West 21th Street, Suite 721
                      <br />
                      New York NY 10016
                    </p>
                  </div>
                </div>
            </SlideFadeIn>
            <SlideFadeIn>
                <div className="row">
                  <div className="col-8 bg-danger rounded-circle conico-bg text-center">
                    <FaPhoneAlt color="white" />
                  </div>
                  <div className="col-4">
                    <p>Phone:</p>
                    <p>+ 1235 2355 98</p>
                  </div>
                </div>
            </SlideFadeIn>
            <SlideFadeIn>
                <div className="row">
                  <div className="col-8 bg-danger rounded-circle conico-bg text-center">
                    <FaPaperPlane color="white" />
                  </div>
                  <div className="col-4">
                    <p>Email:</p>
                    <p>info@yoursite.com</p>
                  </div>
                </div>
            </SlideFadeIn>
            <SlideFadeIn>
                <div className="row">
                  <div className="col-8 bg-danger rounded-circle conico-bg text-center">
                    <FaGlobeAmericas color="white" />
                  </div>
                  <div className="col-4">
                    <p>Website:</p>
                    <p>yoursite.com</p>
                  </div>
                </div>
            </SlideFadeIn>
          </div>
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

export default Contact;
