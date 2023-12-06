import { DashboardUser } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.DASHBOARD.path,
      name: "Dashboard User",
      key: customerRouteMap.DASHBOARD.path,
      private: false,
      belongsToSidebar: true,
      icon: customerRouteMap.DASHBOARD.icon,
      element: <DashboardUser />
    }
  ];
}
