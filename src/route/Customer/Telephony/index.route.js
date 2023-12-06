import { Telephony } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.TELEPHONY.path,
      name: "telephony",
      key: customerRouteMap.TELEPHONY.path,
      private: true,
      belongsToSidebar: true,
      icon: customerRouteMap.TELEPHONY.icon,
      element: <Telephony />
    }
  ];
}
