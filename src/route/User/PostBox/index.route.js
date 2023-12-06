import { PostBox } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.POST_BOX.path,
      name: "Post box",
      key: userRouteMap.POST_BOX.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.POST_BOX.icon,
      element: <PostBox />
    }
  ];
}
