import React from "react";
import { Card } from "react-bootstrap";
import {  PageHeader} from "../../../components";

function Ekyc() {
  
//   const breadcrumb = [
//     {
//       path: "/siteadmin/dashboard",
//       name: "DASHBOARD",
//     },
//     {
//       path: "/siteadmin/user-management",
//       name: "USER MANAGEMENT",
//     },
//     {
//       path: "#",
//       name: "iUSER Detals",
//     },
//   ];

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | E-KYC" />
        </div>
      </div>    
        <Card className="h-100">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <div className="">
    dsd
                    </div>
                </div>
            </Card.Body>
        </Card>  
    </>
  );
}

export default Ekyc;
