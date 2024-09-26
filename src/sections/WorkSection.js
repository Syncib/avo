import React from "react";
import "./WorkSection.css";
import person1 from "../assets/images/person_1.webp";
import person2 from "../assets/images/person_2.webp";
import WorkTemplate from "../components/WorkTemplate";
const personData = [person1, person2, person1, person1, person1];
const WorkSection = () => {
  return (
    <div className="work-section">
      <div class="container">
        <h1 className="nunito-sans-900 text-center mb-5">OUR WORKS</h1>
        <div className="d-flex flex-column gap-5">
          {personData.map((person, index) =>
            index % 2 === 0 ? (
              <WorkTemplate data={person} reverse={false} />
            ) : (
              <WorkTemplate data={person} reverse={true} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
