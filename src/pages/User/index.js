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
export const Conversation = React.lazy(() => import("./Inbox/index.page"));
export const Telephony = React.lazy(() => import("./Telephony/index.page"));
export const UserChangePassword = React.lazy(() =>
  import("./Account/ChangePassword/index.page")
);
export const Recordings = React.lazy(() => import("./Recordings/index.page"));
export * from "./Billing";
export const CallHistory = React.lazy(() => import("./CallHistory/index.page"));
export const PostBox = React.lazy(() => import("./PostBox/index.page"));
export const BuyNumber = React.lazy(() => import("./BuyNumber/index.page"));
export const Survey = React.lazy(() => import("./Survey/index.page"));
