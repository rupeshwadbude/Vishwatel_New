import DashboardRoutes from "./Dashboard/index.route";
import UserManagementRoutes from "./UserManagement/index.route";
import customerAccountRoutes from "./CustomerAccount/index.route";
import ekyc from "./Ekyc/index.route";
import profileUpdate from "./ProfileUpdate/index.route";
import conversation from "./Conversation/index.route";

export default function route() {
  return [
    ...DashboardRoutes(),
    ...UserManagementRoutes(),
    ...customerAccountRoutes(),
    ...ekyc(),
    ...profileUpdate(),
    ...conversation(),
  ];
}
