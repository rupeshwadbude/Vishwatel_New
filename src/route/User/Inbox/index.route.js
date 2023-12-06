import { Conversation } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.CONVERSATION.path,
      name: "Inbox",
      key: userRouteMap.CONVERSATION.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.CONVERSATION.icon,
      element: <Conversation />
    }
  ];
}
