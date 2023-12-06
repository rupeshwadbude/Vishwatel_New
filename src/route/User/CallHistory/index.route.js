import { CallHistory } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.CALL_HISTORY.path,
      name: "Call History",
      key: userRouteMap.CALL_HISTORY.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.CALL_HISTORY.icon,
      element: <CallHistory />
    }
  ];
}
