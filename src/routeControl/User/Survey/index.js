import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  SURVEY: {
    path: `${baseRoutes.userBaseRoutes}survey`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-chat" />
      </span>
    )
  }
};

export default accessRoute;
