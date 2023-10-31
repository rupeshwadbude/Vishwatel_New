import DashboardRoutes from "./Dashboard/index.route";
import UserManagementRoutes from "./UserManagement/index.route";
import adminAccountRoutes from "./AdminAccount/index.route";

export default function route() {
  return [
    ...DashboardRoutes(),
    ...UserManagementRoutes(),
    ...adminAccountRoutes(),
  ];
}
