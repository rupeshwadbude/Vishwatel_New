import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import customerProfile from "./Account/index";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";
import conversation from "./Conversation";
import telephony from "./Telephony";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...userManagement,
  ...customerProfile,
  ...ekyc,
  ...profileUpdate,
  ...conversation,
  ...telephony,
};

export default AccessControl;
