import React from "react";
import "./WorkSection.css";
import person1 from "../assets/images/person_1.webp";
import person2 from "../assets/images/person_2.webp";
import person3 from "../assets/images/person_3.webp";
import work1 from "../assets/images/work-1.webp";
import work2 from "../assets/images/work-2.webp";
import work3 from "../assets/images/work-3.webp";
import work4 from "../assets/images/work-4.webp";
import work5 from "../assets/images/work-5.webp";
import work6 from "../assets/images/work-6.webp";
import WorkTemplate from "../components/WorkTemplate";
import SlideFadeIn from "../components/SlideFadeIn";
const personData = [
  { profile: person1, banner: work1 },
  { profile: person2, banner: work2 },
  { profile: person3, banner: work3 },
  { profile: person2, banner: work4 },
  { profile: person2, banner: work5 },
  { profile: person2, banner: work6 },
];
const WorkSection = () => {
  return (
    <>
      <div class="container">
        <SlideFadeIn>
          <h1 className="nunito-sans-900 text-center mb-5">OUR WORKS</h1>
        </SlideFadeIn>
        <div className="d-flex flex-column">
          {personData.map((person, index) =>
            index % 2 === 0 ? (
              <WorkTemplate key={index} data={person} reverse={false} />
            ) : (
              <WorkTemplate key={index} data={person} reverse={true} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default WorkSection;
