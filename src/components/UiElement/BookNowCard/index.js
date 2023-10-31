import React from "react";
import { Link } from "react-router-dom";
import { ImageElement, checkValidData, checkValidPrice } from "../../../utils";

function BookNowCard({ item, onHandleClick, onNavigate, buttonTitle }) {
  return (
    <div
      className="bookNowCard position-relative"
      data-slick-index="0"
      aria-hidden="false"
      style={{ width: "328px" }}
    >
      <div className="bookNowCard_img position-relative br-10">
        <ImageElement
          source={item?.source}
          class="w-100"
          alt="motor-boat-automatic"
        />
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            onHandleClick();
          }}
          className="liked"
          tabIndex="0"
        >
          <em className="splash-outline-heart" />
        </Link>
      </div>
      <div className="bookNowCard_contBox d-flex flex-column justify-content-between">
        <div>
          <h3>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate();
              }}
              className=""
              tabIndex="0"
            >
              {checkValidData(item?.description)}
            </Link>
          </h3>
        </div>
        <div className="bookNowCard_contBox_price d-flex justify-content-between align-items-center flex-wrap">
          <h4 className="mb-0">
            {checkValidPrice(item?.price)}
            <span>/ {checkValidData(item?.duration)}</span>
          </h4>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate();
            }}
            className=""
            tabIndex="0"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookNowCard;
