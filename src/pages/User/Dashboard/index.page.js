import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Breadcrumb, PageHeader } from "../../../components";

function Dashboard() {
  const breadcrumb = [
    {
      path: "#",
      name: "DASHBOARD"
    }
  ];
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Dashboard">
            <Breadcrumb breadcrumb={breadcrumb} />
          </PageHeader>
        </div>
      </div>
      <div className="nk-block">
        <div className="dashboardTiles nk-store-statistics">
          <Row className="g-2 g-xxl-4">
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-success">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Users
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        1520
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-success-dim ni ni-users" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-warning">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Listings
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        220
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-warning-dim ni ni-reports-alt" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-danger">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Trips
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        1520
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-danger-dim ni ni-list-check" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-info">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Reservations
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        4542
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-info-dim ni ni-card-view" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-secondary">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Events
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        1520
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-secondary-dim ni ni-calendar-alt" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-success">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Revenue
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        $1520
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-success-dim ni ni-sign-dollar" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" md="4" lg="3">
              <Card className="overflow-hidden">
                <Card.Body className="border-primary">
                  <div className="d-flex align-items-center">
                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                      {" "}
                      Total Tickets Sold
                    </p>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-3">
                        520
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      <em className="icon icon-lg bg-primary-dim ni ni-ticket-alt" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
