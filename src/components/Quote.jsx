import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Quote.css"
import SlideFadeIn from "./SlideFadeIn";
const Quote = ({data}) => {
  return (
    <div>
       <FaQuoteLeft color="red" size="2rem" className="position-relative quote-icon"/>
        <div className="client-card d-flex flex-column justify-content-center">
      <SlideFadeIn>
        <p className="nunito-sans-regular client-para">
          Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>
      </SlideFadeIn>
      <div className="row align-items-center">
        <img src={data} alt="client" className=" col-4 img-fluid rounded-circle" />
        <div className="col">
          <SlideFadeIn>
            <p className="nunito-sans-regular text-center m-0">Roger Scott</p>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="nunito-sans-regular text-center m-0">Marketing Manager</p>
          </SlideFadeIn>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Quote;
