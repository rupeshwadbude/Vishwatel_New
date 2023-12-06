import { UserDashboard } from "../../../pages";
import userRouteMap from "../../../routeControl/User";

export default function route() {
  return [
    {
      path: userRouteMap.DASHBOARD.path,
      name: "Dashboard",
      key: userRouteMap.DASHBOARD.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.DASHBOARD.icon,
      element: <UserDashboard />
    }
  ];
}
