import { DesktopOutlined } from "@ant-design/icons";
import { CustomerSignup, ChannelSignup, Login } from "../../pages";
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
    },
    {
      path: customerRouteMap.CUSTOMER_SIGNUP.path,
      name: "Login",
      key: customerRouteMap.CUSTOMER_SIGNUP.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <CustomerSignup />
    },
    {
      path: customerRouteMap.CHANNELSIGNUP.path,
      name: "Channel Signup",
      key: customerRouteMap.CHANNELSIGNUP.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <ChannelSignup />
    }
  ];
}
