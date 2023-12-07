import DashboardRoutes from "./Dashboard/index.route";
import channelSignUp from "./CustomerAccount/channelSignUp";
export default function route() {
  return [...DashboardRoutes()];
}
