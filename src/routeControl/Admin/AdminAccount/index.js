// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  ADMIN_PROFILE: {
    path: `${baseRoutes.adminBaseRoutes}profile`,
  },
  ADMIN_CHANGE_PASSWORD: {
    path: `${baseRoutes.adminBaseRoutes}change-password`,
  },
};

export default accessRoute;
