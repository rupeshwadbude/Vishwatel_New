import React from "react";
import { Col, Row } from "react-bootstrap";
import { Breadcrumb, PageHeader} from "../../../../components";

function UserDetails() {
  
  const breadcrumb = [
    {
      path: "/siteadmin/dashboard",
      name: "DASHBOARD",
    },
    {
      path: "/siteadmin/user-management",
      name: "USER MANAGEMENT",
    },
    {
      path: "#",
      name: "USER Details",
    },
  ];

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="User Management">
            <Breadcrumb breadcrumb={breadcrumb} />
          </PageHeader>
        </div>
      </div>
      <Row className="g-2 row">
        <Col lg="4" xl="4" xxl="3">
          <div className="card h-100">
            <div className="card-inner-group">
                <div className="card-inner">
                    <div className="user-card user-card-s2">
                        <div className="user-avatar lg bg-primary">
                            <img src="../assets/images/admin/avatar/b-sm.jpg" alt="userName" />
                        </div>
                        <div className="user-info">
                            <div className="badge bg-success rounded-pill ucap">Verified</div>
                            <h5>Francis Mitcham</h5>
                            <span className="sub-text">francis@test.com</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Col>
        <Col lg="8" xl="8" xxl="9">
          <div className="card h-100">
            <div className="card-inner">
              <div className="nk-block">
                <div className="nk-block-head">
                    <h5 className="title">Personal Information</h5>
                </div>
                <div className="profile-ud-list">
                    
                    <div className="profile-ud-item">
                        <div className="profile-ud wider">
                            <span className="profile-ud-label">Date of Birth</span>
                            <span className="profile-ud-value">10 Aug, 1980</span>
                        </div>
                    </div>
                    <div className="profile-ud-item">
                        <div className="profile-ud wider">
                            <span className="profile-ud-label">Gender</span>
                            <span className="profile-ud-value">Male</span>
                        </div>
                    </div>
                    <div className="profile-ud-item">
                        <div className="profile-ud wider">
                            <span className="profile-ud-label">Language</span>
                            <span className="profile-ud-value">English</span>
                        </div>
                    </div>
                    <div className="profile-ud-item">
                        <div className="profile-ud wider">
                            <span className="profile-ud-label">Location</span>
                            <span className="profile-ud-value"> Victoria 3053 Australia</span>
                        </div>
                    </div>
                    <div className="profile-ud-item w-100">
                        <div className="profile-ud wider flex-wrap">
                            <span className="profile-ud-label">Bio Info</span>
                            <span className="profile-ud-value text-start mt-1">Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra.</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      
    </>
  );
}

export default UserDetails;
