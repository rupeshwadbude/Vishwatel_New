import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  LOGIN: {
    path: `${baseRoutes.adminBaseRoutes}`,
  },
  CHANNELSIGNUP: {
    path: `${baseRoutes.adminBaseRoutes}/channel-signup`,
  },
  FORGOT_PASSWORD: {
    path: `${baseRoutes.adminBaseRoutes}forgot-password`,
  },
  RESET_PASSWORD: {
    path: `${baseRoutes.adminBaseRoutes}reset-password`,
  },
  CHANGE_PASSWORD: {
    path: `${baseRoutes.adminBaseRoutes}/change-password`,
  },
};

export default accessRoute;
