import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  RECORDINGS: {
    path: `${baseRoutes.userBaseRoutes}recordings`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-chat" />
      </span>
    )
  }
};

export default accessRoute;
