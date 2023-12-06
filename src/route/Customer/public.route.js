import { DesktopOutlined } from "@ant-design/icons";
import { Login } from "../../pages";
import customerRouteMap from "../../routeControl/customerRouteMap";

export default function route() {
  return [
    {
      path: customerRouteMap.LOGIN.path,
      name: "Login",
      key: customerRouteMap.LOGIN.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <Login />
    }
  ];
}
