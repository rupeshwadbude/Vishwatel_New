import { Survey } from "../../../pages";
import userRouteMap from "../../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.SURVEY.path,
      name: "Survey",
      key: userRouteMap.SURVEY.path,
      private: false,
      belongsToSidebar: true,
      icon: userRouteMap.SURVEY.icon,
      element: <Survey />
    }
  ];
}
