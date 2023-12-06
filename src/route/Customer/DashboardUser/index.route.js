import { DashboardUser } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.DASHBOARDUSER.path,
      name: "Dashboard User",
      key: customerRouteMap.DASHBOARDUSER.path,
      private: false,
      belongsToSidebar: true,
      icon: customerRouteMap.DASHBOARDUSER.icon,
      element: <DashboardUser />
    }
  ];
}
