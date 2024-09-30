import React from 'react'
import "./EstimatedPort.css"
import SlideFadeIn from './SlideFadeIn'
const EstimatedPort = () => {
  return (
    <SlideFadeIn>
      <div className="get-estimate container">
      <SlideFadeIn>
        <div className="estimated-div">
          <h2 className="red about-para">Get Started</h2>
          <h1 className="estimate-heading white">
            Fill in the brief and get the project estimate
          </h1>
          <p className="about-para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="btn btn-danger slide-text-btn px-3">
            Get started
          </button>
        </div>
      </SlideFadeIn>
        </div>
    </SlideFadeIn>
  )
}

export default EstimatedPort