import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SlickSlider({ Settings, customArrow = false, children }) {
  const [data, setData] = useState();
  const [currentSlider, setCurrentSlider] = useState(0);
  const renderArrows = () => {
    return (
      <div className="container position-relative">
        <div className="homeSliderNav_arrow d-flex">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              data.slickPrev();
            }}
            className={`arrow-prev font-bd slick-arrow slick-prev ${
              currentSlider === 0 ? " slick-disabled" : ""
            }`}
          >
            <em className="icon-prev" />
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              data.slickNext();
            }}
            className={`arrow-next font-bd slick-arrow slick-next ${
              currentSlider === children.length - 1 ? " slick-disabled" : ""
            }`}
          >
            <em className="icon-next" />
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      <Slider
        ref={(c) => setData(c)}
        afterChange={(i) => {
          setCurrentSlider(i);
        }}
        {...Settings}
      >
        {children}
      </Slider>
      {customArrow && renderArrows()}
    </>
  );
}

export default SlickSlider;
