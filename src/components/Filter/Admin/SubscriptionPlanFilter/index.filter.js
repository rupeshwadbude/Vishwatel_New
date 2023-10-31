// import {Formik, Form } from "formik";
// import moment from "moment";
import React
// , { useState } 
from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {AntSelect, CommonButton} from "../../../index";
// import { DatePicker, CommonButton, Select } from "../../..";
// import { classicDateFormat } from "../../../../helpers";
// import { disabledFutureDate } from "../../../../utils";

function SubscriptionPlanFilter() {
  // const {
  //   t,
  //   // onSubmit,
  //   // onReset,
  //   // loading,
  //   // countryList,
  //   // cityList,
  //   // filterData,
  //   // onSelectCountry,
  //   // onSelectState,
  //   // statesList,
  //   // cityLoader,
  //   // stateLoader,
  //   // countryLoader,
  // } = mainProps;

  // const initialValues = {
  //   registeredFrom: filterData?.registeredFrom || "",
  //   registeredTo: filterData?.registeredTo || "",
  //   countryId: filterData?.countryId || undefined,
  //   stateId: filterData?.stateId || undefined,
  //   cityId: filterData?.cityId || undefined,
  //   status: filterData?.status || undefined,
  // };

  // const [disableReset, setDisableReset] = useState(true);
  // const [disableSubmit, setDisableSubmit] = useState(false);

  const arrayOfData = [
    { id: "all", name: "All" },
    {
      id: "active",
      name: "Active",
    },
    {
      id: "inactive",
      name: "Inactive",
    },
  ];
  const planTypeData = [
    {
      id: "videoConferencing",
      name: "Video Conferencing",
    },
    {
      id: "translation",
      name: "Translation",
    },
    {
      id: "bundled",
      name: "Bundled",
    }
  ];

  // const onHandleReset = (resetForm) => {
  //   resetForm({});
  //   setDisableReset(true);
  //   if (
  //     filterData?.registeredFrom ||
  //     filterData?.registeredTo ||
  //     filterData?.status ||
  //     filterData?.countryId ||
  //     filterData?.stateId ||
  //     filterData?.cityId
  //   )
  //     onReset();
  // };

  return (
    // <Formik
    //   initialValues={{ ...initialValues }}
    //   onSubmit={disableSubmit && onSubmit}
    //   enableReinitialize
    //   validate={(e) => {
    //     if (
    //       e.registeredFrom ||
    //       e.registeredTo ||
    //       e.status ||
    //       e.countryId ||
    //       e.cityId
    //     ) {
    //       setDisableReset(false);
    //       setDisableSubmit(true);
    //     } else {
    //       setDisableReset(true);
    //       setDisableSubmit(false);
    //     }
    //   }}
    // >
    //   {(props) => {
    //     const { values } = props;
        // return (
          <form>
            <div className="dropdown-body dropdown-body-rg">
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-group ">
                    <label className="overline-title overline-title-alt">
                      {/* {t("text.manageSellers.country")} */}
                      Status
                    </label>
                    <AntSelect
                      size="medium"
                      id="status"
                      extraClassName="form-control"
                      name="statusId"
                      disabled={false}
                      variant="standard"
                      placeholder="Select"
                      arrayOfData={arrayOfData}
                      // setFieldValue={props.handleChange}
                      // onSelect={(e) => onSelectCountry(props.setFieldValue, e)}
                      // loading={countryLoader}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group ">
                    <label className="overline-title overline-title-alt">
                      {/* {t("text.manageSellers.country")} */}
                      Plan Type
                    </label>
                    <AntSelect
                      size="medium"
                      id="status"
                      extraClassName="form-control"
                      name="statusId"
                      disabled={false}
                      variant="standard"
                      placeholder="Select"
                      arrayOfData={planTypeData}
                      // setFieldValue={props.handleChange}
                      // onSelect={(e) => onSelectCountry(props.setFieldValue, e)}
                      // loading={countryLoader}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-foot between">
              <Link
                to="#"
                // onClick={(e) => {
                //   e.preventDefault();
                //   if (!disableReset) {
                //     onHandleReset(props.resetForm);
                //   }
                // }}
                type="button"
                className="clickable"
              >
                {/* {t("text.common.resetFilter")} */}
                Reset
              </Link>

              <CommonButton
                extraClassName="btn btn-sm btn-primary"
                htmlType="submit"
                // loading={loading}
                // type="submit"
              >
                {/* {t("text.common.filter")} */}
                Filter
              </CommonButton>
            </div>
          </form>
        // );
    //   }}
    // </Formik>
  );
}

export default withTranslation()(SubscriptionPlanFilter);
