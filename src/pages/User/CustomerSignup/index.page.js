import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { DatePicker } from "antd";
import {
  AuthLogo,
  CommonButton,
  ImageElement,
  ModalComponent,
  Input as TextInput,
  Password as TextPassword
} from "../../../components";
// import { modalNotification } from "../../../utils";
// import { Input as TextInput, Password as TextPassword} from "../../../index";
// import customerRouteMap from "../../../routeControl/customerRouteMap";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  // const navigate = useNavigate();
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

  const loginSuccessfully = () => {
    // modalNotification({
    //   type: "success",
    //   message: "Signin Successfully",
    // });
    // setTimeout(() => {
    //   navigate(customerRouteMap.DASHBOARD.path);
    // }, 2000);
    setSignupModal(true);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleCloseModal = () => {
    setSignupModal(false);
  };
  return (
    <>
      <div className="authPage nk-block nk-block-middle nk-auth-body wide-xxl">
        <div className="card">
          <div className="card-header">
            <AuthLogo />
          </div>
          <div className="card-inner card-inner-lg">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <h4 className="nk-block-title text-center">
                  Customer Sign Up Process
                </h4>
              </div>
            </div>
            <form>
              <div className="authPage_radio d-md-flex ailgn-items-center justify-content-center mb-2 mb-lg-4">
                <div className="form-check me-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customer"
                    id="individual"
                  />
                  <label className="form-check-label" htmlFor="individual">
                    Individual
                  </label>
                </div>

                <div className="form-check me-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customer"
                    id="business"
                  />
                  <label className="form-check-label" htmlFor="business">
                    Business
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customer"
                    id="non-profit"
                  />
                  <label className="form-check-label" htmlFor="non-profit">
                    Non-profit Organization
                  </label>
                </div>
              </div>
              <Row>
                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        First Name<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextInput
                        id="firstname"
                        className="form-control form-control-lg"
                        name="firstname"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="First Name"
                        setFieldValue=""
                        icon=""
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        Last Name<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextInput
                        id="lastname"
                        className="form-control form-control-lg"
                        name="lastname"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Last Name"
                        setFieldValue=""
                        icon=""
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        DOB<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <DatePicker
                        className="form-control form-control-lg"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        Company
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextInput
                        id="lastname"
                        className="form-control form-control-lg"
                        name="lastname"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Enter your company name"
                        setFieldValue=""
                        icon=""
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        Email<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextInput
                        id="email"
                        className="form-control form-control-lg"
                        name="email"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Enter your email"
                        setFieldValue=""
                        icon=""
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="email">
                        Phone Number<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextInput
                        id="email"
                        className="form-control form-control-lg"
                        name="email"
                        disabled={false}
                        variant="standard"
                        type="text"
                        placeholder="Enter your number"
                        setFieldValue=""
                        icon=""
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Password<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextPassword
                        className="form-control form-control-lg"
                        name="password"
                        placeholder="Enter your password"
                        setFieldValue=""
                        type={showPassword ? "text" : "password"}
                        toggleIcon={
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowPassword(!showPassword);
                            }}
                            className="form-icon lg form-icon-right passcode-switch"
                            data-target="password"
                          >
                            <em
                              className={`passcode-icon icon-show icon ni ni-eye${
                                showPassword ? "" : "-off"
                              } `}
                            />
                          </Link>
                        }
                        icon=""
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Confirm Password<span>*</span>
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <TextPassword
                        className="form-control form-control-lg"
                        name="password"
                        placeholder="Re-Enter your password"
                        setFieldValue=""
                        type={repeatPassword ? "text" : "password"}
                        toggleIcon={
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setRepeatPassword(!repeatPassword);
                            }}
                            className="form-icon lg form-icon-right passcode-switch"
                            data-target="password"
                          >
                            <em
                              className={`passcode-icon icon-show icon ni ni-eye${
                                repeatPassword ? "" : "-off"
                              } `}
                            />
                          </Link>
                        }
                        icon=""
                      />
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="authPage_radio  authPage_radio-formBtm">
                    <div className="form-group mb-0">
                      <label className="form-label">
                        Billing Name<span>*</span>
                      </label>

                      <div className="d-md-flex ailgn-items-center justify-content-start">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="form-btm"
                            id="name"
                          />
                          <label className="form-check-label" htmlFor="name">
                            Name
                          </label>
                        </div>

                        <div className="form-check me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="form-btm"
                            id="company"
                          />
                          <label className="form-check-label" htmlFor="company">
                            Company
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="form-btm"
                            id="both"
                          />
                          <label className="form-check-label" htmlFor="both">
                            Both (Name and Company)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="authPage_btn form-group mt-lg-5 mt-3 d-flex align-items-center justify-content-center mb-0">
                <CommonButton
                  extraClassName="btn-lg btn-inline justify-content-center me-3"
                  variant="primary"
                  onClick={() => loginSuccessfully()}
                >
                  Submit
                </CommonButton>

                <CommonButton
                  extraClassName="btn-lg btn-inline justify-content-center"
                  variant="secondary"
                >
                  Reset
                </CommonButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ModalComponent
        backdrop
        show={signupModal}
        extraTitleClassName="d-none"
        modalExtraClass="signupModal"
      >
        <div className="text-center">
          <div className="">
            <ImageElement
              previewSource="/assets/images/admin/signup-success.png"
              className="img-fluid"
            />
          </div>
          <h3 className="mt-3">Sign Up Successfully</h3>
          <p>
            You have successfully sign Up, <br />
            You can close this window and continue using <br />
            the Vishwatel service.
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <CommonButton
              extraClassName="btn-lg btn-inline justify-content-center me-3"
              variant="primary"
              onClick={() => {
                setSigninModal(true);
                setSignupModal(false);
              }}
            >
              Sign In
            </CommonButton>

            <CommonButton
              extraClassName="btn-lg btn-inline justify-content-center"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </CommonButton>
          </div>
        </div>
      </ModalComponent>

      <ModalComponent
        backdrop
        show={signinModal}
        extraTitleClassName="d-none"
        modalExtraClass="signupModal"
      >
        <div className="text-center">
          <div className="">
            <ImageElement
              previewSource="/assets/images/admin/signup-success.png"
              className="img-fluid"
            />
          </div>
          <h3 className="mt-3">Sign In Successfully</h3>
          <p>
            You have successfully signed into your account. <br />
            You can close this window and continue using the <br />
            Vishwatel service.
          </p>

          <CommonButton
            extraClassName="btn-lg btn-inline justify-content-center"
            variant="secondary"
            onClick={() => setSigninModal(false)}
          >
            Close
          </CommonButton>
        </div>
      </ModalComponent>
    </>
  );
}

export default Login;
