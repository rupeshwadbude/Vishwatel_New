import React from "react";
import { Breadcrumb, DataTable,ListingHeader,PageHeader, SubscriptionPlanFilter } from "../../../components";

function Dashboard() {
  const breadcrumb = [
    {
      path: "/admin/dashboard",
      name: "DASHBOARD",
    },
    {
      path: "#",
      name: "SUBSCRIPTION PLANS",
    },
  ];
  const customerData = [
    {
      id: 1,
      name: "Basic",
      planType: "Basic",
      price: "$0",
      status: "active"
    },
    {
      id: 2,
      name: "Silver",
      planType: "Translation",
      price: "$300",
      status: "active"
    },
    {
      id: 3,
      name: "Gold",
      planType: "Video Conferencing",
      price: "$600",
      status: "inactive"
    },
    {
      id: 4,
      name: "Platinum",
      planType: "Bundled",
      price: "$900",
      status: "active"
    },
   
  ]
  
  const columns = [
    {
      dataField: "id",
      text: "S.No.",
      headerClasses: "w_70"
    },
    {
      dataField: "name",
      text: "Plan Name",
      headerClasses: "sorting"
    },
    {
      dataField: "planType",
      text: "Plan Type",
      headerClasses: "sorting"
    },
    {
      dataField: "price",
      text: "Plan price",
      headerClasses: "sorting",
    },
    // {
    //   dataField: "status",
    //   text: "Status",
    //   headerClasses: "sorting",
    //   formatter: statusFormatter,
    // },
    // {
    //   dataField: "action",
    //   text: "Action",
    //   headerClasses: "nk-tb-col-tools text-end",
    //   formatter: (cell, row) => actionFormatter(options(row)),
    // },
  ];
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Dashboard">
            <Breadcrumb breadcrumb={breadcrumb} />
          </PageHeader>
          <ListingHeader
            btnArray={["filter", "create"]}
            btnText="Add New"
            popover={
              <SubscriptionPlanFilter
                // onSubmit={handleFilterSubmit}
                // loading={loading}
                // onReset={onReset}
                // filterData={filterData}
                // onSelectCountry={onSelectCountry}
                // onSelectState={onSelectState}
                // statesList={states}
                // countryList={countries}
                // cityList={cities}
                // cityLoader={cityLoader}
                // stateLoader={stateLoader}
                // countryLoader={countryLoader}
              />
            }
            // setVisible={setVisible}
            // visible={visible}
          />
        </div>
      </div>
      <DataTable
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
          />
    </>
  );
}

export default Dashboard;
