import auth from "./Auth";
import userDashboard from "./Dashboard";
import profile from "./Account";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";
import conversation from "./Conversation";
import telephony from "./Telephony";
import recordings from "./Recordings";
import billing from "./Billing";
import callHistory from "./CallHistory";
import postBox from "./PostBox";
import buyNumber from "./BuyNumber";
import survey from "./Survey";

const AccessControl = {
  ...auth,
  ...profile,
  ...userDashboard,
  ...ekyc,
  ...profileUpdate,
  ...conversation,
  ...telephony,
  ...recordings,
  ...billing,
  ...callHistory,
  ...postBox,
  ...buyNumber,
  ...survey
};
export default AccessControl;
