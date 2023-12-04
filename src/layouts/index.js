import React from "react";

export { default as AppLayout } from "./App/index.layout";
// export {default as MainLayout} from "./Main/index.layout";
// export {default as PublicLayout} from "./Public/index.layout";

// export const AppLayout = Lazy(()=>import("./Auth/index.layout"));
export const MainLayout = React.lazy(() => import("./Main/index.layout"));
export const PublicLayout = React.lazy(() => import("./Public/index.layout"));
export const PrivateLayout = React.lazy(() => import("./Private/index.layout"));
export const AuthLayout = React.lazy(() => import("./Auth/index.layout"));
export const CustomerLayout = React.lazy(() =>
  import("./Customer/index.layout")
);
export const CustomerPublicLayout = React.lazy(() =>
  import("./Customer/public.layout")
);
export const CustomerPrivateLayout = React.lazy(() =>
  import("./Customer/private.layout")
);
export const UserPublicLayout = React.lazy(() =>
  import("./User/public.layout")
);
export const UserPrivateLayout = React.lazy(() =>
  import("./User/private.layout")
);
export const UserLayout = React.lazy(() => import("./User/index.layout"));
