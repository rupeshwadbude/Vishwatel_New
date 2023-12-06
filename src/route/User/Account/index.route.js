import { UserChangePassword, UserProfile } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.CUSTOMER_PROFILE.path,
      name: "Profile",
      key: userRouteMap.CUSTOMER_PROFILE.path,
      private: false,
      belongsToSidebar: false,
      element: <UserProfile />
    },
    {
      path: userRouteMap.CUSTOMER_CHANGE_PASSWORD.path,
      name: "Change Password",
      key: userRouteMap.CUSTOMER_CHANGE_PASSWORD.path,
      private: false,
      belongsToSidebar: false,
      element: <UserChangePassword />
    }
  ];
}
