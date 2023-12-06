import React from "react";

export const Login = React.lazy(() => import("./Login/index.page"));
export const CustomerSignup = React.lazy(() =>
  import("./CustomerSignup/index.page")
);

export const AdminDashboard = React.lazy(() =>
  import("./Dashboard/index.page")
);

export const DashboardUser = React.lazy(() =>
  import("./DashboardUser/index.page")
);
export const Profile = React.lazy(() => import("./Account/Profile/index.page"));
export const ChangePassword = React.lazy(() =>
  import("./Account/ChangePassword/index.page")
);
