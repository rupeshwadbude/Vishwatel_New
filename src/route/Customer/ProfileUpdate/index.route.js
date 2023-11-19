import { ProfileUpdate } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.PROFILEUPDATE.path,
      name: "Profile Update",
      key: customerRouteMap.PROFILEUPDATE.path,
      private: true,
      belongsToSidebar: true,
      icon: customerRouteMap.PROFILEUPDATE.icon,
      element: <ProfileUpdate />
    }
  ];
}
