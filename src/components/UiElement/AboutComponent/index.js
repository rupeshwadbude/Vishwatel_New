import React from "react";
import { Link } from "react-router-dom";
import SectionComponent from "../SectionComponent";
import { ImageElement } from "../../../utils";

function AboutComponent({ t }) {
  return (
    <SectionComponent extraClassName="aboutUs py-70 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-7 col-md-6 text-md-left text-center">
            <ImageElement
              source="/about-us.png"
              className="img-fluid aboutImg"
              alt="about-us"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          <div className="col-xxl-5 col-md-6">
            <div
              className="commonHead text-center text-md-start mb-0 mt-md-0 mt-3"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <span className="commonHead_tag d-inline-block position-relative text-uppercase">
                {t("text.userHome.aboutUs")}
              </span>
              <h2 className="commonHead_title">Title</h2>
              <p className="mb-0">
                If you rent a boat for a day, many people make a mistake to plan
                too many stopovers and programs into one day. One of the biggest
                advantage of renting a boat for a day is the stunning places
                that you will discover during the day on your journey.{" "}
              </p>
              <Link
                to="#"
                className="btn btn-warning d-inline-flex ripple-effect text-uppercase explorebtn"
              >
                {t("text.userHome.explore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}

export default AboutComponent;
