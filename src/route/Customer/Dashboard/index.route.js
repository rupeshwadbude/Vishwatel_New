import { AdminDashboard } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.DASHBOARD.path,
      name: "Super Admin Dashboard",
      key: customerRouteMap.DASHBOARD.path,
      private: false,
      belongsToSidebar: true,
      icon: customerRouteMap.DASHBOARD.icon,
      element: <AdminDashboard />
    }
  ];
}
