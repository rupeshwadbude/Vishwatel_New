import auth from "./Auth";
import userDashboard from "./Dashboard";
import profile from "./Account";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";
import conversation from "./Conversation";
import telephony from "./Telephony";
import recordings from "./Recordings";
import billing from "./Billing";

const AccessControl = {
  ...auth,
  ...profile,
  ...userDashboard,
  ...ekyc,
  ...profileUpdate,
  ...conversation,
  ...telephony,
  ...recordings,
  ...billing
};
export default AccessControl;
