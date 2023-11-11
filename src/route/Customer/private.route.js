import DashboardRoutes from "./Dashboard/index.route";
import UserManagementRoutes from "./UserManagement/index.route";
import customerAccountRoutes from "./CustomerAccount/index.route";
import ekyc from "./Ekyc/index.route";

export default function route() {
  return [
    ...DashboardRoutes(),
    ...UserManagementRoutes(),
    ...customerAccountRoutes(),
    ...ekyc(),
  ];
}
