import { ChangePassword, Profile } from "../../../pages";
import customerRouteMap from "../../../routeControl";

export default function route() {
  return [
    {
      path: customerRouteMap.CUSTOMER_PROFILE.path,
      name: "Profile",
      key: customerRouteMap.CUSTOMER_PROFILE.path,
      private: true,
      belongsToSidebar: false,
      element: <Profile />
    },
    {
      path: customerRouteMap.CUSTOMER_CHANGE_PASSWORD.path,
      name: "Change Password",
      key: customerRouteMap.CUSTOMER_CHANGE_PASSWORD.path,
      private: true,
      belongsToSidebar: false,
      element: <ChangePassword />
    }
  ];
}
