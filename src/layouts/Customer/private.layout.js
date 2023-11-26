/*eslint-disable*/

import React, {
  useEffect,
  useState
} from "react";
// import { useSelector } from "react-redux";
import {
  Outlet
  // useNavigate
} from "react-router-dom";
// import { AppLayout } from "..";
import { moduleRoutesList } from "../../route";
import { CustomerFooter, CustomerHeader, Sidebar } from "../../components";
// import { selectUserData } from "../../redux/AuthSlice/index.slice";
// import { routesList } from "../../routes/index";

let routeList = moduleRoutesList();

function AdminPrivateLayout() {
  // const userData = useSelector(selectUserData);
  // let routeList = moduleRoutesList();
  // const navigate = useNavigate();
  // const [redirectpath, setRedirectPath] = useState("");

  // useEffect(() => {
  //   if (redirectpath) {
  //     navigate(redirectpath);
  //   }
  // }, [redirectpath]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuToggle = () => {
    if (window.innerWidth <= 1199) {
      setSidebarOpen(!sidebarOpen);
      const list = document.querySelector("body");
      list?.classList.toggle("nav-shown");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      let navbar = document.querySelector(".nk-header");
      let footer = document.querySelector(".nk-footer");
      let inner = document.querySelector(".nk-block-head");
      let contentInner = document.querySelector(".nk-content-inner .ekycPage .card-body");
      let content = document.querySelector(".nk-content");
  
      if (navbar && footer && inner && contentInner && content) {
        let navbarHeight = navbar.clientHeight;
        let footerHeight = footer.clientHeight;
        let innerHeight = inner.clientHeight;
  
        contentInner.style.minHeight = `${window.innerHeight - (footerHeight + innerHeight + navbarHeight + 70)}px`;
        content.style.paddingTop = `${navbarHeight + 35}px`;
      }
    }, 300);
  }, []);
  return (
    // <AppLayout setRedirectPath={setRedirectPath}>
    <div className="nk-body bg-lighter npc-general has-sidebar">
      <div className="nk-app-root">
        <div className="nk-main ">
          <Sidebar
            sidebarOpen={sidebarOpen}
            menuToggle={menuToggle}
            routes={routeList.admin}
          />
          {sidebarOpen ? (
            <div onClick={() => menuToggle()} className="nk-sidebar-overlay" />
          ) : (
            ""
          )}
          <div className="nk-wrap">
            <CustomerHeader menuToggle={menuToggle} />
            <div className="nk-content">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
            <CustomerFooter />
          </div>
        </div>
      </div>
    </div>
    // </AppLayout>
  );
}

export default AdminPrivateLayout;
