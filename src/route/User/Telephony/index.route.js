import { Telephony } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.TELEPHONY.path,
      name: "telephony",
      key: userRouteMap.TELEPHONY.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.TELEPHONY.icon,
      element: <Telephony />
    }
  ];
}
