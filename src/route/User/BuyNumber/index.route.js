import { BuyNumber } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.BUY_NUMBER.path,
      name: "Buy A Number",
      key: userRouteMap.BUY_NUMBER.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.BUY_NUMBER.icon,
      element: <BuyNumber />
    }
  ];
}
