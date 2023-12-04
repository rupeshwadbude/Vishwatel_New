// import { DesktopOutlined } from "@ant-design/icons";

import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  DASHBOARDUSER: {
    path: `${baseRoutes.adminBaseRoutes}dashboard-user`,
    icon: (
      <span className="nk-menu-icon">
        <em className="icon ni ni-grid-alt" />
      </span>
    ),
  },
};

export default accessRoute;
