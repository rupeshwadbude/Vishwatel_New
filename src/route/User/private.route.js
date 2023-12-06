import DashboardRoutes from "./Dashboard/index.route";
import ekyc from "./Ekyc/index.route";
import profileUpdate from "./ProfileUpdate/index.route";
import conversation from "./Conversation/index.route";
import telephony from "./Telephony/index.route";
import AccountRoutes from "./Account/index.route";

export default function route() {
  return [
    ...AccountRoutes(),
    ...DashboardRoutes(),
    ...telephony(),
    ...ekyc(),
    ...profileUpdate(),
    ...conversation()
  ];
}
