import { ProfileUpdate } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.PROFILEUPDATE.path,
      name: "General Settings",
      key: userRouteMap.PROFILEUPDATE.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.PROFILEUPDATE.icon,
      element: <ProfileUpdate />
    }
  ];
}
