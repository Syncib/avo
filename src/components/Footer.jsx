import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer container bg-black">
      <div className="row gap-5">
        <div className="col-12 col-lg-4">
          <div className="d-flex flex-column gap-5">
            <h5 className="text-white">avo</h5>
            <p className="about-para">
              Far far away, behind
              <br />
              the word mountains,
              <br /> far from the countries.
            </p>
            <div className="d-flex gap-3">
              <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                <FaTwitter color="gray" />
              </div>
              <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                <FaFacebookF color="gray" />
              </div>
              <div className="bg-dark rounded-circle p-2 ico-bg text-center">
                <FaInstagram color="gray" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="d-flex flex-column gap-5">
              <h5 className="text-white">Community</h5>
              <div>
                  <div className="d-flex align-items-center about-para">
                    <FaChevronRight />
                    <span>Projects</span>
                  </div>
                  <div className="d-flex align-items-center about-para">
                    <FaChevronRight />
                    <span>Projects</span>
                  </div>
                  <div className="d-flex align-items-center about-para">
                    <FaChevronRight />
                    <span>Projects</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
