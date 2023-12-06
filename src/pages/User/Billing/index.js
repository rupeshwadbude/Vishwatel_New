import React from "react";

export const PreparedAccount = React.lazy(() =>
  import("./PreparedAccount/index.page")
);
export const Plan = React.lazy(() => import("./Plan/index.page"));
export const PaymentMethods = React.lazy(() =>
  import("./PaymentMethods/index.page")
);
export const Receipt = React.lazy(() => import("./Receipt/index.page"));
export const Usage = React.lazy(() => import("./Usage/index.page"));
