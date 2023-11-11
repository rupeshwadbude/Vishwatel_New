import { EkycPage } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.EKYC.path,
      name: "Ekyc",
      key: customerRouteMap.EKYC.path,
      private: true,
      belongsToSidebar: true,
      icon: customerRouteMap.EKYC.icon,
      element: <EkycPage />
    }
  ];
}
