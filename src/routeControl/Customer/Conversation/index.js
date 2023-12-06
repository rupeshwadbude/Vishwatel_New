import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CONVERSATION: {
    path: `${baseRoutes.adminBaseRoutes}conversation`,
    icon: <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-chat"/>
      </span>
  },
};

export default accessRoute;
