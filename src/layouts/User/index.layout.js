import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { AppLayout } from "..";
import "../../styles/scss/admin/admin.scss";
// import { decodeQueryData, navigateWithParam } from "../../utils";

function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  console.log("pathname", pathname);
  useEffect(() => {
    let pathPattern = /[ ]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
  }, [pathname]);

  return <Outlet />;
}

export default UserLayout;
