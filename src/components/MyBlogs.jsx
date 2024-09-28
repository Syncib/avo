import React from "react";
import { FaComment } from "react-icons/fa";
import image1 from "../assets/images/image_1.webp";
import image2 from "../assets/images/image_2.webp";
import image3 from "../assets/images/image_3.webp";
import image4 from "../assets/images/image_4.webp";
import "./MyBlogs.css";
const MyBlogs = () => {
  const blogImages = [image1, image2, image3, image4];
  return (
    <div className="row justify-content-center gap-4">
      {blogImages.map(image=>(
        <div className="col-12 col-lg-2">
        <p className="blog-entry">Amplify your blockchain team</p>
        <div className="blog-image" style={{ backgroundImage: `url(${image})` }}></div>
        <p className="d-inline-flex align-items-center gap-2 blog-entry-meta">
          <span>June 01, 2020 Admin</span>
          <FaComment />
          <span>3</span>
        </p>
        <p className="about-para blog-para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>
      </div>
      ))}
      
    </div>
  );
};

export default MyBlogs;
