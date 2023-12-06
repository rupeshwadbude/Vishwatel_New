// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CUSTOMER_PROFILE: {
    path: `${baseRoutes.userBaseRoutes}profile`
  },
  CUSTOMER_CHANGE_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}change-password`
  }
};

export default accessRoute;
