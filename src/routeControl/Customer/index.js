import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import dashboardUser from "./DashboardUser";
import customerProfile from "./Account/index";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";
import conversation from "./Conversation";
import telephony from "./Telephony";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...dashboardUser,
  ...userManagement,
  ...customerProfile,
  ...ekyc,
  ...profileUpdate,
  ...conversation,
  ...telephony,
};

export default AccessControl;
