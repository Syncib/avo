import React from "react";
import person1 from "../assets/images/person_1.webp";
import person2 from "../assets/images/person_2.webp";
import person3 from "../assets/images/person_3.webp";
import Quote from "../components/Quote";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientReview.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // At screen width < 1024px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ClientReview = () => {
  const ourClients = [person2, person1, person2, person1,person3];
  return (
    <div className="client-section container">
      <h1 className="nunito-sans-900 text-center mb-5">
        CLIENTS SAYS ABOUT US?
      </h1>
      <Slider {...settings}>
        {ourClients.map((client, index) => (
          <Quote key={index} data={client} />
        ))}
      </Slider>
    </div>
  );
};

export default ClientReview;
