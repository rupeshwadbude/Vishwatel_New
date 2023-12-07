import React from "react";

export const ChannelDashboard = React.lazy(() =>
  import("./Dashboard/index.page")
);
export const ChannelSignup = React.lazy(() =>
  import("./ChannelSignup/index.page")
);
