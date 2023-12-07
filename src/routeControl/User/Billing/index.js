// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  BILLING: {
    path: "/billing",
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-report-profit"/>
      </span>
    )
  },
  PREPARED_ACCOUNT: {
    path: `${baseRoutes.userBaseRoutes}billing/prepared-account`
  },
  PLAN: {
    path: `${baseRoutes.userBaseRoutes}billing/plan`
  },
  PAYMENT_METHOD: {
    path: `${baseRoutes.userBaseRoutes}billing/payment-method`
  },
  RECIEPT: {
    path: `${baseRoutes.userBaseRoutes}billing/reciept`
  },
  USAGE: {
    path: `${baseRoutes.userBaseRoutes}billing/usage`
  }
};

export default accessRoute;
