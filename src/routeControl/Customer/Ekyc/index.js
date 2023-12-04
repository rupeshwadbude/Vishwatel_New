import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  EKYC: {
    path: `${baseRoutes.adminBaseRoutes}ekyc`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-money"/>
      </span>
    ),
  },
};

export default accessRoute;
