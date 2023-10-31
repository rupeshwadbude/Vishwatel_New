import { DesktopOutlined } from "@ant-design/icons";
import { AdminLogin } from "../../pages";
import adminRouteMap from "../../routeControl/adminRouteMap";

export default function route() {
  return [
    {
      path: adminRouteMap.LOGIN.path,
      name: "Admin Login",
      key: adminRouteMap.LOGIN.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <AdminLogin />,
    },
  ];
}
