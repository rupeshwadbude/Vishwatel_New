import { Conversation } from "../../../pages";
import customerRouteMap from "../../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.CONVERSATION.path,
      name: "Conversation",
      key: customerRouteMap.CONVERSATION.path,
      private: true,
      belongsToSidebar: true,
      icon: customerRouteMap.CONVERSATION.icon,
      element: <Conversation />
    }
  ];
}
