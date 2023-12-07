import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CONVERSATION: {
    path: `${baseRoutes.userBaseRoutes}inbox`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-inbox-in"/>
      </span>
    )
  }
};

export default accessRoute;
