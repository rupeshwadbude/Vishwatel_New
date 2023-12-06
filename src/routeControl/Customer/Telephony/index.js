import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  TELEPHONY: {
    path: `${baseRoutes.adminBaseRoutes}telephony`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-call"/>
      </span>
    ),
  },
};

export default accessRoute;
