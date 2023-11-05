import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import customerProfile from "./Account/index";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...userManagement,
  ...customerProfile
};

export default AccessControl;
