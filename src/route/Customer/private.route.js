import DashboardRoutes from "./Dashboard/index.route";
import AccountRoutes from "./CustomerAccount/index.route";

export default function route() {
  return [...DashboardRoutes(), ...AccountRoutes()];
}
