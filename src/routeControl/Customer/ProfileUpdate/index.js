import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  PROFILEUPDATE: {
    path: `${baseRoutes.adminBaseRoutes}profile-update`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-account-setting-alt"/>
      </span>
    ),
  },
};

export default accessRoute;
