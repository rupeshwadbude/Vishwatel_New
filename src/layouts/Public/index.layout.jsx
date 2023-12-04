import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import { AppLayout } from "..";
import { UserFooter, UserHeader } from "../../components";
import { moduleRoutesList } from "../../route";

function PublicLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const getmoduleRoutesList = moduleRoutesList();
  const [redirectpath, setRedirectPath] = useState("");
  let path = pathname.replace("/", "");
  const userRole = "user";
  path = path === "" ? "home" : path;

  useEffect(() => {
    let pathPattern = /[\/]$/g;
    if (pathPattern.test(pathname)) {
      navigate(pathname.replace(pathPattern, ""), { replace: true });
    }
    window.addBodyClass(path);
    window.removeBodyClass(path);
    Aos.init({
      disable() {
        let maxWidth = 1199;
        return window.innerWidth < maxWidth;
      }
    });
    // setTimeout(() => {
    //   let navbar = document.querySelector(".navbar").clientHeight;
    //   let footer = document.querySelector(".footerSec").clientHeight;
    //   document.querySelector(".mainContent").style.minHeight = `${
    //     window.innerHeight - (navbar + footer)
    //   }px`;
    // }, 300);
  }, []);

  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath);
    }
  }, [redirectpath]);

  const pageClass = {
    home: "homePage",
    login: "authPage"
  };

  return (
    <>
      <AppLayout setRedirectPath={setRedirectPath}>
        <main className={`main-content ${pageClass?.[path]}`}>
          <UserHeader routes={getmoduleRoutesList?.[userRole]} />
          <Outlet />
          <UserFooter routes={getmoduleRoutesList?.[userRole]} />
        </main>
      </AppLayout>
    </>
  );
}

export default PublicLayout;
