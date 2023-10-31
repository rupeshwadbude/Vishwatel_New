import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input as TextInput, Password as TextPassword } from "../../../../Antd";
import { CommonButton } from "../../../../UiElement";
// import validation from "./validation";
function LoginForm({ onSubmit, t }) {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      // validationSchema={validation()}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <div className="form-group">
              <div className="position-relative fieldicon">
                <TextInput
                  className="form-control fieldicon-input-right"
                  name="email"
                  disabled={false}
                  variant="standard"
                  type="email"
                  placeholder={t("text.auth.emailPlaceholder")}
                  setFieldValue={props.handleChange}
                  icon={<em className="fieldicon-right splash-envelope" />}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-icon position-relative">
                <TextPassword
                  className="form-control fieldicon-input-right"
                  name="password"
                  setFieldValue={props.handleChange}
                  placeholder={t("text.auth.passwordPlaceholder")}
                  type={showPassword ? "text" : "password"}
                  icon={
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword(!showPassword);
                      }}
                      className="showPassword d-flex align-items-center justify-content-center"
                      data-target="password"
                    >
                      {showPassword ? (
                        <em className="toggle-password fieldicon-right splash-eye" />
                      ) : (
                        <em className="toggle-password fieldicon-right splash-eye-off" />
                      )}
                    </Link>
                  }
                />
              </div>
            </div>

            <CommonButton
              htmlType="submit"
              type="submit"
              loading={false}
              extraClassName="btn btn-warning ripple-effect w-100 loadMore"
            >
              {t("text.auth.login")}
            </CommonButton>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
