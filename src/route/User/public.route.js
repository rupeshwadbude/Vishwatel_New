import { DesktopOutlined } from "@ant-design/icons";
import { UserLogin, UserSignUp } from "../../pages";
import userRouteMap from "../../routeControl/userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.LOGIN.path,
      name: "Login",
      key: userRouteMap.LOGIN.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <UserLogin />
    },
    {
      path: userRouteMap.CUSTOMER_SIGNUP.path,
      name: "User SignUp",
      key: userRouteMap.CUSTOMER_SIGNUP.path,
      private: false,
      belongsToSidebar: false,
      icon: <DesktopOutlined />,
      element: <UserSignUp />
    }
    // {
    //   path: userRouteMap.CHANNELSIGNUP.path,
    //   name: "Channel Signup",
    //   key: userRouteMap.CHANNELSIGNUP.path,
    //   private: false,
    //   belongsToSidebar: false,
    //   icon: <DesktopOutlined />,
    //   element: <ChannelSignup />
    // }
  ];
}
