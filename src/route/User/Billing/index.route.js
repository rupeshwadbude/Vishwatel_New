import { Outlet } from "react-router-dom";
import userRouteMap from "../../../routeControl/userRouteMap";
import {
  PaymentMethods,
  Plan,
  PreparedAccount,
  Receipt,
  Usage
} from "../../../pages";

export default function route() {
  return [
    {
      path: userRouteMap.BILLING.path,
      name: "Billing",
      key: userRouteMap.BILLING.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.BILLING.icon,
      element: <Outlet />,
      children: [
        {
          path: userRouteMap.PREPARED_ACCOUNT.path,
          private: false,
          name: "Prepaid Account",
          key: userRouteMap.PREPARED_ACCOUNT.path,
          belongsToSidebar: true,
          icon: userRouteMap.PREPARED_ACCOUNT.icon,
          element: <PreparedAccount />
        },
        {
          path: userRouteMap.PLAN.path,
          private: false,
          name: "Plan",
          key: userRouteMap.PLAN.path,
          belongsToSidebar: true,
          icon: userRouteMap.PLAN.icon,
          element: <Plan />
        },
        {
          path: userRouteMap.PAYMENT_METHOD.path,
          private: false,
          name: "Payment Method",
          key: userRouteMap.PAYMENT_METHOD.path,
          belongsToSidebar: true,
          icon: userRouteMap.PAYMENT_METHOD.icon,
          element: <PaymentMethods />
        },
        {
          path: userRouteMap.RECIEPT.path,
          private: false,
          name: "Reciept",
          key: userRouteMap.RECIEPT.path,
          belongsToSidebar: true,
          icon: userRouteMap.RECIEPT.icon,
          element: <Receipt />
        },
        {
          path: userRouteMap.USAGE.path,
          private: false,
          name: "Usage",
          key: userRouteMap.USAGE.path,
          belongsToSidebar: true,
          icon: userRouteMap.USAGE.icon,
          element: <Usage />
        }
      ]
    }
  ];
}
