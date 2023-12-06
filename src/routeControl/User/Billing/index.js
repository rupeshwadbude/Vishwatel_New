// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  BILLING: {
    path: "/billing",
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  },
  PREPARED_ACCOUNT: {
    path: `${baseRoutes.userBaseRoutes}billing/prepared-account`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  },
  PLAN: {
    path: `${baseRoutes.userBaseRoutes}billing/plan`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  },
  PAYMENT_METHOD: {
    path: `${baseRoutes.userBaseRoutes}billing/payment-method`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  },
  RECIEPT: {
    path: `${baseRoutes.userBaseRoutes}billing/reciept`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  },
  USAGE: {
    path: `${baseRoutes.userBaseRoutes}billing/usage`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-view-x3" />
      </span>
    )
  }
};

export default accessRoute;
