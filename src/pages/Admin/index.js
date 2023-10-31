import React from "react";

export const AdminLogin = React.lazy(() => import("./Login/index.page"));
export const AdminDashboard = React.lazy(() =>
  import("./Dashboard/index.page")
);
export const UserManagement = React.lazy(() =>
  import("./UserManagement/UserList/index.page")
);
export const UserDetails = React.lazy(() =>
  import("./UserManagement/UserDetails/index.page")
);
export const AdminProfile = React.lazy(() =>
  import("./AdminAccount/AdminProfile/index.page")
);
export const AdminChangePassword = React.lazy(() =>
  import("./AdminAccount/AdminChangePassword/index.page")
);
