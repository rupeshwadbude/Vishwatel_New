import { DesktopOutlined } from "@ant-design/icons";
import { CustomerSignup, ChannelSignup, Login } from "../../pages";
import channelPartnerRouteMap from "../../routeControl/channelPartnerRouteMap";

export default function route() {
  return [
    {
      path: channelPartnerRouteMap.LOGIN.path,
      name: "Login",
      key: channelPartnerRouteMap.LOGIN.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <Login />
    },
    {
      path: channelPartnerRouteMap.CUSTOMER_SIGNUP.path,
      name: "Login",
      key: channelPartnerRouteMap.CUSTOMER_SIGNUP.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <CustomerSignup />
    },
    {
      path: channelPartnerRouteMap.CHANNELSIGNUP.path,
      name: "Channel Signup",
      key: channelPartnerRouteMap.CHANNELSIGNUP.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <ChannelSignup />
    }
  ];
}
