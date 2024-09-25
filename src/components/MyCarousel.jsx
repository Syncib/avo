import React, { useState, useRef, useEffect } from "react";
import slider1 from "../assets/images/bg_1.webp";
import slider2 from "../assets/images/bg_2.jpg";
import { FaPlay } from "react-icons/fa";
import "./MyCarousel.css"; // Custom CSS
import { useSpring,animated } from "react-spring";
const images = [slider1, slider2];
const Number = ({n})=>{
  const {number} = useSpring({
    from:{number:0},
    number:n,
    delay:200,
    config:{
      mass:1,
      tension:20,
      friction:10
    }
  })
  return <animated.div>{number.to(n=>n.toFixed(0))}</animated.div>
}
const MyCarousel = () => {
  const [dragStart, setDragStart] = useState(0); // Store initial drag position
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" slide
  const [currentTranslate, setCurrentTranslate] = useState(0); // For temporary dragging translation
  const [dragging, setDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null); // For managing automatic scrolling

  // Clone the first and last slide for infinite effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  // Function to handle index wrapping
  const handleInfiniteScroll = () => {
    if (currentIndex === 0) {
      // If on the first clone, jump to the last real slide
      setCurrentIndex(images.length);
      setIsTransitioning(false);
    } else if (currentIndex === images.length + 1) {
      // If on the last clone, jump to the first real slide
      setCurrentIndex(1);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    // Adjust transition after the "fake" slides
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        handleInfiniteScroll();
      }, 50); // Small timeout to wait for the transition to end
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < extendedImages.length - 1 ? prevIndex + 1 : 1
      );
      setIsTransitioning(true);
    }, 1000000); // Change slide every 5 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  // Start automatic scrolling on component mount and clean up on unmount
  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll(); // Clean up the interval
    };
  }, []);

  const handleMouseDown = (e) => {
    stopAutoScroll(); // Stop auto-scrolling when the user interacts
    setDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const dragDistance = e.clientX - dragStart;
    setCurrentTranslate(dragDistance); // Move by drag distance
  };

  const handleMouseUp = () => {
    setDragging(false);
    startAutoScroll(); // Resume auto-scrolling after user interaction

    const dragThreshold = 100; // You can tweak this value
    if (currentTranslate > dragThreshold && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Go to previous slide
    } else if (
      currentTranslate < -dragThreshold &&
      currentIndex < extendedImages.length - 1
    ) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Go to next slide
    }

    setCurrentTranslate(0); // Reset translation after snap
    setIsTransitioning(true);
  };

  const handleTouchStart = (e) => {
    stopAutoScroll(); // Stop auto-scrolling on touch interaction
    setDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;

    const dragDistance = e.touches[0].clientX - dragStart;
    setCurrentTranslate(dragDistance);
  };

  const handleTouchEnd = () => {
    setDragging(false);
    startAutoScroll(); // Resume auto-scrolling after interaction
    handleMouseUp(); // Use the same logic as mouse up
  };

  const getRealIndex = () => {
    // Returns the real index between 0 and images.length - 1
    if (currentIndex === 0) return images.length - 1; // First clone
    if (currentIndex === images.length + 1) return 0; // Last clone
    return currentIndex - 1;
  };

  return (
    <div
      ref={carouselRef}
      className="carousel-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Handle case where mouse leaves container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${currentTranslate}px))`,
          transition:
            dragging || !isTransitioning ? "none" : "transform 0.5s ease",
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            className="slider-div postion-relative"
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="container position-relative slide-text">
              <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <h1 className="white nunito-sans-900 slide-text-heading">
                    We Create Modern & Minimal Website
                  </h1>
                  <p className="nunito-sans-regular slide-text-para">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <button className="btn btn-danger slide-text-btn p-3">
                    Start Project
                  </button>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <h1 className="white nunito-sans-900 slide-text-heading border-danger px-3 text-lg-end custom-border">
                    <Number n={400}/>
                  </h1>
                  <p className="nunito-sans-regular slide-text-para text-lg-end">
                    More than a hundred successful projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-danger play-button rounded-circle position-absolute z-3"><FaPlay color="black" /></button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${getRealIndex() === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
