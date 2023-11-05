// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CUSTOMER_PROFILE: {
    path: `${baseRoutes.adminBaseRoutes}profile`
  },
  CUSTOMER_CHANGE_PASSWORD: {
    path: `${baseRoutes.adminBaseRoutes}change-password`
  }
};

export default accessRoute;
