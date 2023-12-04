import customerRoutes from "./Customer";
import userRouteMap from "./User";

const moduleRoutesMap = {
  ...customerRoutes,
  ...userRouteMap
};
export default moduleRoutesMap;
