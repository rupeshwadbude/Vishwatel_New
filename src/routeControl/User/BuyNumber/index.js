import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  BUY_NUMBER: {
    path: `${baseRoutes.userBaseRoutes}buy-number`,
    icon: (
      <span className="nk-menu-icon">
        {/* <em className="icon ni ni-user-alt" /> */}
        <em className="icon ni ni-chat" />
      </span>
    )
  }
};

export default accessRoute;
