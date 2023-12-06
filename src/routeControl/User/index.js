import auth from "./Auth";
import userDashboard from "./Dashboard";
import profile from "./Account";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";
import conversation from "./Conversation";
import telephony from "./Telephony";

const AccessControl = {
  ...auth,
  ...profile,
  ...userDashboard,
  ...ekyc,
  ...profileUpdate,
  ...conversation,
  ...telephony
};
export default AccessControl;
