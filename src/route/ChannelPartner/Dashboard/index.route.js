import { ChannelDashboard } from "../../../pages";
import channelPartnerRouteMap from "../../../routeControl/channelPartnerRouteMap";

export default function route() {
  return [
    {
      path: channelPartnerRouteMap.DASHBOARD.path,
      name: "Dashboard",
      key: channelPartnerRouteMap.DASHBOARD.path,
      private: false,
      belongsToSidebar: true,
      icon: channelPartnerRouteMap.DASHBOARD.icon,
      element: <ChannelDashboard />
    }
  ];
}
