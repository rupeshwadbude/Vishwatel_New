import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../App/index.layout";

function AdminPublicLayout() {
  return (
    <AppLayout>
      <div className="nk-body bg-lighter npc-general pg-auth no-touch nk-nio-theme">
        <div className="nk-app-root">
          <div className="nk-main ">
            <div className="nk-wrap nk-wrap-nosidebar">
              <div className="nk-content ">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default AdminPublicLayout;
