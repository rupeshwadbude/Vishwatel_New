import React from "react";

export const Login = React.lazy(() => import("./Login/index.page"));
export const CustomerSignup = React.lazy(() =>
  import("./CustomerSignup/index.page")
);
export const ChannelSignup = React.lazy(() =>
  import("./ChannelSignup/index.page")
);
export const AdminDashboard = React.lazy(() =>
  import("./Dashboard/index.page")
);
export const UserManagement = React.lazy(() =>
  import("./UserManagement/UserList/index.page")
);
export const UserDetails = React.lazy(() =>
  import("./UserManagement/UserDetails/index.page")
);
export const Profile = React.lazy(() => import("./Account/Profile/index.page"));
export const EkycPage = React.lazy(() => import("./Ekyc/index.page"));
export const ProfileUpdate = React.lazy(() => import("./ProfileUpdate/index.page"));
export const Conversation = React.lazy(() => import("./Conversation/index.page"));
export const ChangePassword = React.lazy(() =>
  import("./Account/ChangePassword/index.page")
);
