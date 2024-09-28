import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Quote.css"
const Quote = ({data}) => {
  return (
    <div>
       <FaQuoteLeft color="red" size="2rem" className="position-relative quote-icon"/>
        <div className="client-card d-flex flex-column justify-content-center">
      <p className="nunito-sans-regular client-para">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="row align-items-center">
        <img src={data} alt="client" className=" col-4 img-fluid rounded-circle" />
        <div className="col">
          <p className="nunito-sans-regular text-center m-0">Roger Scott</p>
          <p className="nunito-sans-regular text-center m-0">Marketing Manager</p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Quote;
