import React from "react";

export const UserSignUp = React.lazy(() =>
  import("./CustomerSignup/index.page")
);
export const UserLogin = React.lazy(() => import("./Login/index.page"));
export const UserDashboard = React.lazy(() =>
  import("./DashboardUser/index.page")
);
export const UserProfile = React.lazy(() =>
  import("./Account/Profile/index.page")
);
export const EkycPage = React.lazy(() => import("./Ekyc/index.page"));
export const ProfileUpdate = React.lazy(() =>
  import("./ProfileUpdate/index.page")
);
export const Conversation = React.lazy(() =>
  import("./Conversation/index.page")
);
export const Telephony = React.lazy(() => import("./Telephony/index.page"));
export const UserChangePassword = React.lazy(() =>
  import("./Account/ChangePassword/index.page")
);
export const Recordings = React.lazy(() => import("./Recordings/index.page"));
