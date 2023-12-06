import DashboardRoutes from "./Dashboard/index.route";
import ekyc from "./Ekyc/index.route";
import profileUpdate from "./ProfileUpdate/index.route";
import inbox from "./Inbox/index.route";
import telephony from "./Telephony/index.route";
import AccountRoutes from "./Account/index.route";
import recordings from "./Recordings/index.route";
import billing from "./Billing/index.route";
import CallHistory from "./CallHistory/index.route";
import PostBox from "./PostBox/index.route";
import buyNumber from "./BuyNumber/index.route";
import survey from "./Survey/index.route";

export default function route() {
  return [
    ...AccountRoutes(),
    ...DashboardRoutes(),
    ...telephony(),
    ...recordings(),
    ...billing(),
    ...CallHistory(),
    ...inbox(),
    ...PostBox(),
    ...ekyc(),
    ...buyNumber(),
    ...survey(),
    ...profileUpdate()
  ];
}
