import { UserDetails, UserManagement } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.USER_MANAGEMENT.path,
      name: "User Management",
      key: customerRouteMap.USER_MANAGEMENT.path,
      private: true,
      belongsToSidebar: false,
      icon: customerRouteMap.USER_MANAGEMENT.icon,
      element: <UserManagement />
    },
    {
      path: customerRouteMap.USER_DETAILS.path,
      name: "User Details",
      key: customerRouteMap.USER_DETAILS.path,
      private: true,
      element: <UserDetails />
    }
  ];
}
