import { AdminDashboard } from "../../../pages";
import adminRouteMap from "../../../routeControl/adminRouteMap";

export default function route() {
  return [
    {
      path: adminRouteMap.DASHBOARD.path,
      name: "Dashboard",
      key: adminRouteMap.DASHBOARD.path,
      private: false,
      belongsToSidebar: true,
      icon: adminRouteMap.DASHBOARD.icon,
      element: <AdminDashboard />,
    },
  ];
}
