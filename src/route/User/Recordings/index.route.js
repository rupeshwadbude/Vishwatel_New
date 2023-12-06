import { Recordings } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.RECORDINGS.path,
      name: "Recordings",
      key: userRouteMap.RECORDINGS.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.RECORDINGS.icon,
      element: <Recordings />
    }
  ];
}
