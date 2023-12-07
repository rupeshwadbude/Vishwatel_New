import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  LOGIN: {
    path: `${baseRoutes.userBaseRoutes}`
  },
  CUSTOMER_SIGNUP: {
    path: `${baseRoutes.userBaseRoutes}customer-signup`
  },
  CHANNELSIGNUP: {
    path: `${baseRoutes.userBaseRoutes}/channel-signup`
  },
  FORGOT_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}forgot-password`
  },
  RESET_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}reset-password`
  },
  CHANGE_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}/change-password`
  }
};

export default accessRoute;
