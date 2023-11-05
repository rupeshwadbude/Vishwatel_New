import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { DatePicker } from 'antd';
import {
  AuthLogo,
  CommonButton,
  Input as TextInput,
  Password as TextPassword,
} from "../../../components";
import { modalNotification } from "../../../utils";
// import { Input as TextInput, Password as TextPassword} from "../../../index";
import adminRouteMap from "../../../routeControl/adminRouteMap";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const navigate = useNavigate();
  const loginSuccessfully = () => {
    modalNotification({
      type: "success",
      message: "Signin Successfully",
    });
    setTimeout(() => {
      navigate(adminRouteMap.DASHBOARD.path);
    }, 2000);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
                <h4 className="nk-block-title text-center">Channel Partner SignUp Page</h4>
              </div>
            </div>
            <form>
            <div className="authPage_radio d-md-flex ailgn-items-center justify-content-start mb-2 mb-lg-4">
                <div className="form-check me-4">
                  <input className="form-check-input" type="radio" name="customer" id="individual" />
                  <label className="form-check-label" htmlFor="individual">
                    Individual
                  </label>
                </div>

                <div className="form-check me-4">
                  <input className="form-check-input" type="radio" name="customer" id="organization" />
                  <label className="form-check-label" htmlFor="organization">
                    Organization
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
    </>
  );
}

export default Login;
