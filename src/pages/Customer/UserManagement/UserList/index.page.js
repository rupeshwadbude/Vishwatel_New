import React, { useState } from "react";
import {
  // actionFormatter,
  Breadcrumb,
  // DataTable,
  ListingHeader,
  PageHeader,
  SweetAlert
  // switchFormatter
} from "../../../../components";
// import customerRouteMap from "../../../../routeControl/customerRouteMap";
import { modalNotification } from "../../../../utils";

function UserManagement() {
  const [isAlertVisibleDelete, setIsAlertVisibleDelete] = useState(false);
  const onTypeDeleteConfirmAlert = () => {
    modalNotification({
      type: "success",
      message: "User Deleted Successfully"
    });
    setIsAlertVisibleDelete(false);
  };
  // const options = () => {
  //   const optionsArr = [
  //     {
  //       name: "View",
  //       icon: "icon ni ni-eye",
  //       action: "redirect",
  //       path: `${customerRouteMap.USER_DETAILS.path}`
  //       // onClickHandle: () => {showViewDiscountModal(); setViewData(row); setViewDataModal('pending'); document.body.click()}
  //     },
  //     {
  //       name: "Delete",
  //       icon: "icon ni ni-trash",
  //       action: "confirm",
  //       onClickHandle: () => {
  //         setIsAlertVisibleDelete(true);
  //         document.body.click();
  //       }
  //     }
  //   ];
  //   return optionsArr;
  // };

  const breadcrumb = [
    {
      path: "/siteadmin/dashboard",
      name: "DASHBOARD"
    },
    {
      path: "#",
      name: "USER MANAGEMENT"
    }
  ];
  // const customerData = [
  //   {
  //     id: 1,
  //     name: "Ashley Lawson",
  //     email: "ashley@test.com",
  //     phone: "9580095000",
  //     price: "$0",
  //     status: "active"
  //   }
  // ];

  // const columns = [
  //   {
  //     dataField: "id",
  //     text: "S.No.",
  //     headerClasses: "w_70"
  //   },
  //   {
  //     dataField: "name",
  //     text: "User Name",
  //     headerClasses: "sorting"
  //   },
  //   {
  //     dataField: "email",
  //     text: "Email ID",
  //     headerClasses: "sorting"
  //   },
  //   {
  //     dataField: "phone",
  //     text: "Phone Number",
  //     headerClasses: "sorting"
  //   },
  //   {
  //     dataField: "status",
  //     text: "Status",
  //     headerClasses: "sorting",
  //     formatter: () => switchFormatter(false)
  //   },
  //   {
  //     dataField: "action",
  //     text: "Action",
  //     headerClasses: "nk-tb-col-tools text-end",
  //     formatter: (cell, row) => actionFormatter(options(row))
  //   }
  // ];
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="User Management">
            <Breadcrumb breadcrumb={breadcrumb} />
          </PageHeader>
          <ListingHeader btnArray={["csvExport"]} />
        </div>
      </div>
      {/* <DataTable
        hasLimit
        noOfPage="1"
        sizePerPage="10"
        page="1"
        count="100"
        tableData={customerData}
        tableColumns={columns}
        // param={param}
        // defaultSort={defaultSort}
        setSizePerPage=""
        // tableLoader={tableLoader}
        // tableReset={tableReset}
        // getSearchValue={getSearchValue}
        // searchPlaceholder={t("text.search.ManageSubscription")}
      /> */}
      <SweetAlert
        title="Are you sure"
        text="you want to delete this user?"
        show={isAlertVisibleDelete}
        icon="warning"
        showCancelButton
        confirmButtonText="Yes"
        cancelButtonText="No"
        setIsAlertVisible={setIsAlertVisibleDelete}
        // showLoaderOnConfirm
        // loading={loading}
        onConfirmAlert={onTypeDeleteConfirmAlert}
      />
    </>
  );
}

export default UserManagement;
