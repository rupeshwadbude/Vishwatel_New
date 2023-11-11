import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import customerProfile from "./Account/index";
import ekyc from "./Ekyc";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...userManagement,
  ...customerProfile,
  ...ekyc
};

export default AccessControl;
