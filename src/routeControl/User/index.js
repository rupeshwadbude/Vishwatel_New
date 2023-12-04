import auth from "./Auth";
import userDashboard from "./Dashboard";

const AccessControl = {
  ...auth,
  ...userDashboard
};
export default AccessControl;
