import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import customerProfile from "./Account/index";
import ekyc from "./Ekyc";
import profileUpdate from "./ProfileUpdate";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...userManagement,
  ...customerProfile,
  ...ekyc,
  ...profileUpdate,
};

export default AccessControl;
