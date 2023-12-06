import { EkycPage } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.EKYC.path,
      name: "Ekyc",
      key: userRouteMap.EKYC.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.EKYC.icon,
      element: <EkycPage />
    }
  ];
}
