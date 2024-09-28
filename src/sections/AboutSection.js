import React from 'react'
import vector from "../assets/icons/vector.png";
import webdev from "../assets/icons/web-programming.png";
import layer from "../assets/icons/layer.png";
import mobile from "../assets/icons/mobile-development.png";
import magnify from "../assets/icons/magnifying-glass.png";
import about from "../assets/images/about.webp";
import "./AboutSection.css"
const AboutSection = () => {
    const aboutThings = [
        { src: vector, name: "UI/UX Design" },
        { src: webdev, name: "Web Development" },
        { src: layer, name: "Product Design" },
        { src: mobile, name: "Mobile Apps" },
        { src: magnify, name: "SEO" },
      ];
  return (
    <div className="about-section container">
    <h1 className="nunito-sans-900 text-center mb-5">ABOUT US</h1>
    <div className="row flex-lg-nowrap">
      {aboutThings.map((item, index) => (
        <div className="col-12 col-lg" key={index}>
          <div className="text-center">
            <img width={60} src={item.src} alt={`${item.name} icon`}></img>
            <p className="nunito-sans-regular fw-bold mt-4">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="row justify-content-center flex-lg-nowrap my-5">
      <div className="col-12 col-lg-3 text-lg-end order-2 order-lg-1">
        <h1 className="nunito-sans-700 about-heading">
          Welcome to AVO A Personal Porfolio Web Agency
        </h1>
        <p className="nunito-sans-regular about-para">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows
          by their place and supplies it with the necessary regelialia. It
          is a paradisematic country, in which roasted parts of sentences
          fly into your mouth.
        </p>
      </div>
      <div className="col-12 col-lg-3 order-1 order-lg-2">
        <img className="about-img" src={about} alt="about"></img>
      </div>
      <div className="col-12 col-lg-3 order-3 order-lg-3">
        <p className="nunito-sans-regular about-para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated
          they live in Bookmarksgrove right at the coast of the Semantics, a
          large language ocean. A small river named Duden flows by their
          place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly
          into your mouth.
        </p>
        <button className="btn btn-danger">View all projects</button>
      </div>
    </div>
    <div className="row my-5 justify-content-center">
      <div className="col-12 col-lg-3 d-flex justify-content-lg-center gap-3">
        <h1 className="about-thing-heading nunito-sans-300">01</h1>
        <div>
          <h2 className="about-thing-subheading nunito-sans-600">
            Search Engine Optimization
          </h2>
          <p className="nunito-sans-regular about-para">
            Far far away, behind the word mountains
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-3 d-flex justify-content-lg-center gap-3">
        <h1 className="about-thing-heading nunito-sans-300">01</h1>
        <div>
          <h2 className="about-thing-subheading nunito-sans-600">
            Search Engine Optimization
          </h2>
          <p className="nunito-sans-regular about-para">
            Far far away, behind the word mountains
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-3 d-flex justify-content-lg-center gap-3">
        <h1 className="about-thing-heading nunito-sans-300">01</h1>
        <div>
          <h2 className="about-thing-subheading nunito-sans-600">
            Search Engine Optimization
          </h2>
          <p className="nunito-sans-regular about-para">
            Far far away, behind the word mountains
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutSection