import { Form, Formik } from "formik";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import dayjs from "dayjs";
import {
  Select,
  Input as TextInput,
  Password as TextPassword,
} from "../../../../Antd";
import { CommonButton, CustomCheck } from "../../../../UiElement";
import {
  dayJsDateFormatter,
  getDateOfMonth,
  getMonths,
} from "../../../../../utils";
// import validation from "./validation";
function SignUpForm({ onSubmit, t }) {
  const [showPassword, setShowPassword] = useState(false);
  const [monthValue, setMonthValue] = useState(
    dayJsDateFormatter(new Date(), "MMMM")
  );
  const [yearValue, setYearValue] = useState(
    dayJsDateFormatter(new Date(), "YYYY")
  );

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    month: undefined,
    day: undefined,
    year: undefined,
    check: undefined,
  };

  const monthOptions = useMemo(() => {
    let arr = [];
    let monthsData = [...getMonths()];
    monthsData.forEach((item) => {
      let obj = {};
      obj.id = item?.toLowerCase();
      obj.name = item;
      arr.push(obj);
    });
    return arr;
  }, []);

  const yearOptions = useMemo(() => {
    let date = new Date();
    let year = date.getFullYear();
    let arr = [];
    for (let i = year; i >= year - 100; i -= 1) {
      let obj = {};
      obj.id = i;
      obj.name = i;
      arr.push(obj);
    }
    return arr;
  }, []);

  const getDate = useMemo(() => {
    let dateData = getDateOfMonth(monthValue, yearValue);
    let arr = [];
    dateData.forEach((item) => {
      let obj = {};
      obj.id = item;
      obj.name = item;
      arr.push(obj);
    });
    return arr;
  }, [monthValue, yearValue]);

  const getMonthValue = (value) => {
    setMonthValue(value);
  };

  const getYearValue = (value) => {
    setYearValue(value);
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
                  name="fullName"
                  disabled={false}
                  variant="standard"
                  type="text"
                  placeholder={t("text.userAuth.fullNamePlaceHolder")}
                  setFieldValue={props.handleChange}
                  icon={<em className="fieldicon-right splash-user" />}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="position-relative fieldicon">
                <TextInput
                  className="form-control fieldicon-input-right"
                  name="email"
                  disabled={false}
                  variant="standard"
                  type="email"
                  placeholder={t("text.userAuth.emailPlaceholder")}
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
                  placeholder={t("text.userAuth.passwordPlaceholder")}
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
            <div className="form-group">
              <label className="font-sm">Birthday</label>
              <div className="row g-2">
                <div className="col-4">
                  <Select
                    className="form-select form-control"
                    setFieldValue={props.handleChange}
                    name="month"
                    placeholder="Month"
                    arrayOfData={[...monthOptions]}
                    callback={getMonthValue}
                  />
                </div>
                <div className="col-4">
                  <Select
                    className="form-select form-control"
                    setFieldValue={props.handleChange}
                    name="day"
                    placeholder="Day"
                    arrayOfData={[...getDate]}
                  />
                </div>
                <div className="col-4">
                  <Select
                    className="form-select form-control"
                    setFieldValue={props.handleChange}
                    name="year"
                    placeholder="Year"
                    arrayOfData={[...yearOptions]}
                    callback={getYearValue}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              {/* <div className="form-check "> */}
              <CustomCheck
                name="check"
                label="By signing up, I agree to Terms of Service"
                setFieldValue={props.handleChange}
              />
              {/* </div> */}
            </div>

            <CommonButton
              htmlType="submit"
              type="submit"
              loading={false}
              extraClassName="btn btn-warning ripple-effect w-100 loadMore"
            >
              {t("text.userAuth.signUp")}
            </CommonButton>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
