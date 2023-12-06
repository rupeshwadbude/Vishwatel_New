import customerRoutes from "./Customer";
import userRouteMap from "./User";
import channelPartnerRouteMap from "./ChannelPartner";

const moduleRoutesMap = {
  ...customerRoutes,
  ...userRouteMap,
  ...channelPartnerRouteMap
};
export default moduleRoutesMap;
