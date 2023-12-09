import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import {
  Input as TextInput,
  ModalComponent,
  PageHeader,
  Select
} from "../../../components";

function BuyNumber() {
  const [getnumberModal, setGetnumberModal] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const phoneNumbers = false;
  const handleCloseModal = () => {
    setGetnumberModal(false);
    setSubscription(false);
  };
  const dataCountry = [
    {
      id: "1",
      name: "India"
    },
    {
      id: "2",
      name: "Austria"
    },
    {
      id: "1",
      name: "Belgium"
    }
  ];

  const dataCity = [
    {
      id: "1",
      name: "Delhi"
    },
    {
      id: "2",
      name: "Mumbai"
    },
    {
      id: "1",
      name: "Bengluru"
    }
  ];

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Buy A Number" />
        </div>
      </div>

      {phoneNumbers ? (
        <Card className="telePage cardHeight h-100">
          <Card.Body className="p-0">
            <div className="telePage_cnt">
              <div className="telePage_head d-flex align-items-center justify-content-between">
                <h2>Phone Number</h2>
                <em className="ni ni-plus" />
              </div>
              <div className="telePage_inner text-center">
                <div className="position-relative">
                  <video width="100%" height="360" controls>
                    <source src="your-video-source.mp4" type="video/mp4" />
                    <track
                      kind="captions"
                      label="English"
                      srcLang="en"
                      src="captions.vtt"
                    />
                    Your browser does not support the video tag.
                  </video>
                  {/* <video width="100%" height="360" src="/assets/images/admin/video.mp4" /> */}
                  <Link to="" className="playIcon">
                    <em className="icon ni ni-play-fill" />
                  </Link>
                </div>
                <p className="mb-0 mt-4">
                  You can purchase local phone numbers in any country. incoming
                  call can
                  <br />
                  be answered in the app or forwarded to any mobile phone number
                  at the
                  <br />
                  cost of a local call.
                </p>

                <Link
                  to=""
                  onClick={() => setGetnumberModal(true)}
                  className="btn btn-secondary mt-4"
                >
                  Get a Local Phone Number
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card className="telePage cardHeight h-100">
          <Card.Body className="p-0">
            <div className="telePage_cnt">
              <div className="telePage_head d-flex align-items-center justify-content-between">
                <h2>Buy Numbers</h2>
                <span>
                  <em className="ni ni-filter" />
                  Filter
                </span>
              </div>
              <div className="telePage_inner telePage_inner-full">
                <Row>
                  <Col md={5}>
                    <div>
                      <Select
                        name="coutry"
                        arrayOfData={dataCountry}
                        extraClassName="text-start"
                        placeholder="Select Country"
                      />
                    </div>
                  </Col>
                  {/* <Col md={5}>
                    <div>
                      <Select
                        name="city"
                        arrayOfData={dataCity}
                        extraClassName="text-start"
                        placeholder="Select City"
                      />
                    </div>
                  </Col> */}
                </Row>
                <p className="numberInfo">
                  Anyone can buy a phone number in india.
                  <br /> Phone numbers in india are not available for free with
                  paid plans cannot be used for free on your website.
                </p>
                <div className="dataTablePhone">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Numbers</th>
                        <th scope="col">Setup</th>
                        <th scope="col">Monthly</th>
                        <th scope="col">Price/min</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            className="d-flex align-items-center"
                            onClick={() => setSubscription(true)}
                          >
                            <img
                              src="/assets/images/admin/bharat-flag.png"
                              className="img-fluid"
                              alt="bharat-flag"
                            />
                            +91-8310-771100
                          </div>
                        </td>
                        <td>-</td>
                        <td>$15.00</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/admin/bharat-flag.png"
                              className="img-fluid"
                              alt="bharat-flag"
                            />
                            +91-8310-771100
                          </div>
                        </td>
                        <td>-</td>
                        <td>$15.00</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/admin/bharat-flag.png"
                              className="img-fluid"
                              alt="bharat-flag"
                            />
                            +91-8310-771100
                          </div>
                        </td>
                        <td>-</td>
                        <td>$15.00</td>
                        <td>$10.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/admin/bharat-flag.png"
                              className="img-fluid"
                              alt="bharat-flag"
                            />
                            +91-8310-771100
                          </div>
                        </td>
                        <td>-</td>
                        <td>$15.00</td>
                        <td>$10.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
      <ModalComponent
        backdrop
        show={getnumberModal}
        extraTitleClassName="d-none"
        modalExtraClass="getNumberModal"
      >
        <div className="getNumberModal_head d-flex align-items-center justify-content-between">
          <h2>Buy Numbers</h2>
          <Link to="#" onClick={handleCloseModal}>
            <em className="icon ni ni-cross" />
          </Link>
        </div>

        <div className="getNumberModal_inner">
          <form>
            <TextInput
              id="search"
              name="search"
              className="form-control"
              placeholder="Search for a place"
              icon={
                <div className="form-icon form-icon-right">
                  <em className="icon ni ni-search" />
                </div>
              }
            />
          </form>

          <ul className="getNumberModal_list list-unstyled ps-0">
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Albania.png"
                  className="img-fluid"
                  alt="flag-of-Albania"
                />
                <span>Albania</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Argentina.png"
                  className="img-fluid"
                  alt="flag-of-Argentina"
                />
                <span>Argentina</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Australia.png"
                  className="img-fluid"
                  alt="flag-of-Australia"
                />
                <span>Australia</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Austria.png"
                  className="img-fluid"
                  alt="flag-of-Austria"
                />
                <span>Austria</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Belgium.png"
                  className="img-fluid"
                  alt="flag-of-Belgium"
                />
                <span>Belgium</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Bolivia.png"
                  className="img-fluid"
                  alt="flag-of-Bolivia"
                />
                <span>Bolivia</span>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/images/admin/flag-of-Bosnia-Herzegovina.png"
                  className="img-fluid"
                  alt="flag-of-Bosnia-Herzegovina"
                />
                <span>Bosnia Herzegovina</span>
              </div>
            </li>
          </ul>
        </div>
      </ModalComponent>
      <ModalComponent
        backdrop
        show={subscription}
        extraTitleClassName="d-none"
        modalExtraClass="getNumberModal"
      >
        <div className="getNumberModal_head d-flex align-items-center justify-content-between">
          <h2>+91-8310-771100</h2>
          <Link to="#" onClick={handleCloseModal}>
            <em className="icon ni ni-cross" />
          </Link>
        </div>

        <div className="getNumberModal_inner subsModal mt-0 p-4">
          <div className="form-group mb-4">
            <label className="form-label">Subscription</label>
            <Select
              name="city"
              arrayOfData={dataCity}
              extraClassName="text-start"
              placeholder="Select City"
            />
          </div>

          <div className="mb-4">
            <div className="d-flex align-items justify-content-between">
              <p className="mb-0">Yearly</p>
              <p className="mb-0">$34.99</p>
            </div>
            <span className="d-block">
              Yearly price is $419.88 you save 5% off yearly subscriptions.
            </span>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items justify-content-between">
              <p className="mb-0">Capabilities</p>
              <p className="mb-0">$34.99</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="d-block">SMS</span>
              <span className="d-block">Not Supported</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items justify-content-between">
              <p className="mb-0">Requirements</p>
              <p className="mb-0">$34.99</p>
            </div>
            <span className="d-block">
              You will be requested to provide an address anywhere in the world
              if you purchase this type of number.
            </span>
          </div>

          <div>
            <div className="d-flex align-items justify-content-between">
              <p className="mb-0">Limitations </p>
              <p className="mb-0">$34.99</p>
            </div>
            <span className="d-block">
              Anyone can buy a phone number in india. phone numbers in india are
              not available for free with paid plans and cannot be used for free
              on your website.
            </span>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-primary mb-3">
              <em className="icon icon-cart" />
              Add to cart
            </button>
            <Link to="#" className="link-primary d-block">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </ModalComponent>
    </>
  );
}

export default BuyNumber;
