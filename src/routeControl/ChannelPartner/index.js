import auth from "./Auth";
import dashboard from "./Dashboard";
import profile from "./Account/index";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...profile
};

export default AccessControl;
