// import { useSelector } from "react-redux";
import { useLocation, generatePath, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { AuthDriver as authDriver, modalNotification } from "../../utils";
import { getCompletePathList } from "../../route";

function AppLayout({ setRedirectPath, children }) {
  const location = useLocation();
  const params = useParams();
  const userData = {};

  console.log("jhdsgjfhsb");

  function getGeneratedPath(data) {
    try {
      return generatePath(data, params);
    } catch (error) {
      return data;
    }
  }

  const activeRoute = getCompletePathList().find((e) => {
    const routePath = getGeneratedPath(e.key);
    const browserPath = location.pathname;
    return routePath === browserPath;
  });

  // const activeRoute = getCompletePathList().find(e => e.key === location.pathname);
  // const activeRoute = getCompletePathList().find(e => e.key.search(location.pathname.replace(/[0-9]/g, '')) >=0)
  const isPrivate = activeRoute?.private;
  const isValid = authDriver(activeRoute, userData, location.pathname);

  function checkValid() {
    if (!isValid) {
      let publicPath = "/";
      let privatePath = "";
      let path = "";
      console.log("sdgdsgdfgdf", location.pathname.search("/"));
      if (location.pathname.search("/") >= 0) {
        path = "/";
      } else {
        path = "user";
      }

      let checkData = userData?.user_type ?? path;

      if (checkData === "admin") {
        privatePath = "/";
      } else {
        privatePath = "/dashboard";
      }

      if (isPrivate === true) {
        /** ******* If route type is private but not*****************
         * ******* able to prove their identity as valid entity*****
         * ********* so redirect it to public route******** */
        modalNotification({
          type: "warning",
          message: "Your Session is expired. Please login again."
        });
        setRedirectPath(publicPath);
        // return false;
      } else if (isPrivate === false) {
        /** ******* If route type is public but not*****************
         * ******* able to prove their identity as valid entity*****
         * ********* so redirect it to private route******** */
        setRedirectPath(privatePath);
      }
    } else {
      // setRedirectPath(location.pathname);
    }
  }

  useEffect(() => {
    checkValid();
  }, [location.pathname]);

  return <>{isValid && children}</>;
}

export default AppLayout;
