import DashboardRoutes from "./Dashboard/index.route";
import DashboardUserRoutes from "./DashboardUser/index.route";
import UserManagementRoutes from "./UserManagement/index.route";
import customerAccountRoutes from "./CustomerAccount/index.route";
import ekyc from "./Ekyc/index.route";
import profileUpdate from "./ProfileUpdate/index.route";
import conversation from "./Conversation/index.route";
import telephony from "./Telephony/index.route";

export default function route() {
  return [
    ...DashboardRoutes(),
    ...DashboardUserRoutes(),
    ...UserManagementRoutes(),
    ...customerAccountRoutes(),
    ...telephony(),
    ...ekyc(),
    ...profileUpdate(),
    ...conversation(),
  ];
}
