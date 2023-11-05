import React from "react";
import { Link } from "react-router-dom";
import { ImageElement } from "..";

function UserFooter() {
  let footerData = [];
  return (
    <>
      <footer className="footer position-relative">
        <ImageElement source="curve-black.svg" alt="" className="w-100" />
        <div className="footer_inner">
          <div className="footer_top">
            <div className="container">
              <div className="row g-3 g-md-4">
                <div className="custom-col col-md-4 position-relative">
                  <div className="footer_top_cnt d-flex align-items-center">
                    <div className="footer_top_left d-flex align-items-center justify-content-center">
                      <em className="splash-search2" />
                    </div>
                    <div className="footer_top_right">
                      <h5 className="text-uppercase">Search</h5>
                      <p className="mb-0">
                        Boat Rentals Peer-To-Peer & Yacht Charter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-col col-md-4 position-relative">
                  <div className="footer_top_cnt d-flex align-items-center">
                    <div className="footer_top_left d-flex align-items-center justify-content-center">
                      <em className="splash-book" />
                    </div>
                    <div className="footer_top_right">
                      <h5 className="text-uppercase">Book</h5>
                      <p className="mb-0">
                        Message The Owner & Book With An Easy-To-Use Booking
                        Platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="custom-col col-md-4 position-relative">
                  <div className="footer_top_cnt d-flex align-items-center">
                    <div className="footer_top_left d-flex align-items-center justify-content-center">
                      <em className="splash-enjoy" />
                    </div>
                    <div className="footer_top_right">
                      <h5 className="text-uppercase">Enjoy</h5>
                      <p className="mb-0">
                        Personalized Experiences With Expert Local Guides.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_middle">
            <div className="container">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="footer_logo">
                    <a className="footer_logo_link" href="javascript:void(0)">
                      <ImageElement
                        source="footer-logo.svg"
                        className="img-fluid"
                        alt="footer-logo"
                      />
                    </a>
                    <p>
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
                      Phasellus Aliquet Diam Celerisquevel Urna Rutrum Feugia
                      Hac To Habitasse Platea Dictumst.
                    </p>
                    <div className="footer_socialIcon">
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <em className="splash-facebook" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <em className="splash-twitter" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <em className="splash-youtube" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            {" "}
                            <em className="splash-insta" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row g-3 g-sm-4 custom-row">
                    {footerData.map((item, key) => {
                      return (
                        <div
                          className={`col-sm-4 footerNavbar ${
                            key === 0 ? "col-md-3 offset-lg-1" : ""
                          }`}
                          key={key}
                        >
                          <h4>{item.label}</h4>
                          <ul className="list-unstyled mb-0">
                            {item.children.map((childData, childKey) => {
                              return (
                                <li key={childKey}>
                                  <Link to={childData.path}>
                                    {childData.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}

                    <div className="col-sm-4 footerNavbar">
                      <h4>Contact Us</h4>
                      <ul className="list-unstyled mb-0 footer_contact mb-0">
                        <li className="d-flex align-items-start">
                          <em className="splash-phone-call" />
                          <a href="tel:1234457895">123 - 445 - 7895</a>
                        </li>
                        <li className="d-flex align-items-start">
                          <em className="splash-mail-outline" />
                          <a href="mailto:info@splash.com">info@splash.com</a>
                        </li>
                        <li className="d-flex align-items-start">
                          <em className="splash-location-outline" />
                          <p className="mb-0">
                            9460 Glenridge Circle <br /> Ormond Beach, FL 32174
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="copyRight text-center">
              © 2023 Splash -All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default UserFooter;
