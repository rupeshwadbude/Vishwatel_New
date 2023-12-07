import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  POST_BOX: {
    path: `${baseRoutes.userBaseRoutes}post-box`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-inbox-out"/>
      </span>
    )
  }
};

export default accessRoute;
