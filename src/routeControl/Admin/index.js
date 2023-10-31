import userManagement from "./UserManagement";
import auth from "./Auth";
import dashboard from "./Dashboard";
import adminProfile from "./AdminAccount/index";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...userManagement,
  ...adminProfile,
};

export default AccessControl;
