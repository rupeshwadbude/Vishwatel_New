import React from "react";

import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <>
      {/* <AppLayout setRedirectPath={setRedirectPath}> */}
      <Outlet />
      {/* </AppLayout> */}
    </>
  );
}

export default PrivateLayout;
