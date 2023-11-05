import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthLogo,
  CommonButton,
  Input as TextInput,
  Password as TextPassword
} from "../../../components";
import { modalNotification } from "../../../utils";
// import { Input as TextInput, Password as TextPassword} from "../../../index";
import adminRouteMap from "../../../routeControl/customerRouteMap";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loginSuccessfully = () => {
    modalNotification({
      type: "success",
      message: "Signin Successfully"
    });
    setTimeout(() => {
      navigate(adminRouteMap.DASHBOARD.path);
    }, 2000);
  };
  return (
    <>
      <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
        <AuthLogo />
        <div className="card">
          <div className="card-inner card-inner-lg">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <h4 className="nk-block-title">Sign-In</h4>
                <div className="nk-block-des">
                  <p>Access the Daakia panel using your email and password.</p>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-control-wrap">
                  <TextInput
                    id="email"
                    className="form-control form-control-lg"
                    name="email"
                    disabled={false}
                    variant="standard"
                    type="email"
                    placeholder="Enter your email address"
                    setFieldValue=""
                    icon=""
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  {/* {moduleRoutesMap.FORGOT_PASSWORD.path} */}
                  <Link className="link link-primary link-sm" to="">
                    Forgot Password?
                  </Link>
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
              {/* <div className="form-group">
                            <div className="d-flex justify-content-between">
                            <div className="custom-control custom-control-sm custom-checkbox">
                                <CustomCheckbox
                                className="custom-control-input"
                                id="checkbox"
                                name="rememberMe"
                                // checked={props.values?.rememberMe}
                                >
                                <label className="custom-control-label" htmlFor="checkbox">
                                    {t("text.adminLogin.rememberMe")}
                                </label>
                                </CustomCheckbox>
                            </div>
                            <Link
                                className="link link-primary link-sm"
                                to={moduleRoutesMap[user].FORGOT_PASSWORD.path}
                            >
                                {t("text.adminLogin.forgotPasswordLink")}
                            </Link>
                            </div>
                        </div> */}
              <div className="form-group">
                <CommonButton
                  extraClassName="btn-lg btn-block"
                  variant="primary"
                  // loading={loading}
                  onClick={() => loginSuccessfully()}
                  // htmlType="button"
                  // type="submit"
                >
                  Sign In
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
