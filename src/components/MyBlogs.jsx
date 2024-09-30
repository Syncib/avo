import React from "react";
import { FaComment } from "react-icons/fa";
import "./MyBlogs.css";
import SlideFadeIn from "./SlideFadeIn";
const MyBlogs = ({blogData}) => {
 
  return (
    <div className="row justify-content-center">
      {blogData.map(image=>(
        <div className="col-12 col-lg-3">
        <SlideFadeIn>
          <p className="blog-entry">Amplify your blockchain team</p>
        </SlideFadeIn>
        <SlideFadeIn>
          <div className="blog-image" style={{ backgroundImage: `url(${image})` }}></div>
        </SlideFadeIn>
        <SlideFadeIn>
          <p className="d-inline-flex align-items-center gap-2 blog-entry-meta">
            <span>June 01, 2020 Admin</span>
            <FaComment />
            <span>3</span>
          </p>
        </SlideFadeIn>
        <SlideFadeIn>
          <p className="about-para blog-para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </SlideFadeIn>
      </div>
      ))}
      
    </div>
  );
};

export default MyBlogs;
