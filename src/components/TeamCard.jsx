import React from "react";
import "./TeamCard.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SlideFadeIn from "./SlideFadeIn";
const TeamCard = ({ teaminfo }) => {
  return (
    <div className="position-relative">
      <img src={teaminfo.img} className="img-fluid" alt="team"/>
      <SlideFadeIn>
        <h2 className="member-name my-3">{teaminfo.name}</h2>
      </SlideFadeIn>
      <p className="member-role">{teaminfo.role}</p>
      <div className="d-flex flex-column gap-3 position-absolute top-0 icons">
        <SlideFadeIn>
          <div className="bg-white rounded-circle m-2 p-2 ico-bg text-center">
            <FaTwitter color="red" />
          </div>
        </SlideFadeIn>
        <SlideFadeIn>
          <div className="bg-white rounded-circle m-2 p-2 ico-bg text-center">
            <FaFacebookF color="red" />
          </div>
        </SlideFadeIn>
        <SlideFadeIn>
          <div className="bg-white rounded-circle m-2 p-2 ico-bg text-center">
            <FaInstagram color="red" />
          </div>
        </SlideFadeIn>
      </div>
    </div>
  );
};

export default TeamCard;
