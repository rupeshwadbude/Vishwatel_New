import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CALL_HISTORY: {
    path: `${baseRoutes.userBaseRoutes}call-history`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-chat" />
      </span>
    )
  }
};

export default accessRoute;
