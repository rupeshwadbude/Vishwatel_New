import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { PageHeader } from "../../../../components";

function Plan() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Billing > Plan" />
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
        <Card.Body className="p-0">
          <div className="telePage_cnt">
            <div className="telePage_head d-flex align-items-center justify-content-between">
              <h2>Plan</h2>
            </div>
            <h5 className="telePage_innerPage p-4">
              View and manage your sonetel plan and data usage
            </h5>
            <div className="telePage_inner telePage_inner-full">
              <Row className=" mb-4">
                <Col md={4}>
                  <div className="prepare prepare-white">
                    <div className="prepareCard">
                      <h2 className="prepareCard_bal">$350</h2>
                      <p className="text-center">Total Balance</p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="prepare prepare-white">
                    <div className="prepareCard">
                      <div className="d-flex align-items-center">
                        <div className="text-center">
                          <em className="icon ni ni-users"/>
                          <p>Users</p>
                        </div>
                        <h2 className="prepareCard_bal">$07</h2>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            <div className="dataTablePhone">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Numbers</th>
                    <th scope="col">Call Type</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/admin/bharat-flag.png"
                          className="img-fluid"
                          alt="bharat-flag"
                        />
                        +91-8310-771100
                      </div>
                    </td>
                    <td>Missed Call</td>
                    <td>02/12/2023</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/admin/bharat-flag.png"
                          className="img-fluid"
                          alt="bharat-flag"
                        />
                        +91-8310-771100
                      </div>
                    </td>
                    <td>Missed Call</td>
                    <td>02/12/2023</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/admin/bharat-flag.png"
                          className="img-fluid"
                          alt="bharat-flag"
                        />
                        +91-8310-771100
                      </div>
                    </td>
                    <td>Missed Call</td>
                    <td>02/12/2023</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/admin/bharat-flag.png"
                          className="img-fluid"
                          alt="bharat-flag"
                        />
                        +91-8310-771100
                      </div>
                    </td>
                    <td>Missed Call</td>
                    <td>02/12/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="numberInfo d-flex justify-content-sm-between">
              <div className="justify-content-start">Al credits</div>
              <div className="justify-content-end">0 of 100 credits</div>
            </div>
            <div className="numberInfo d-flex justify-content-sm-between">
              <div className="justify-content-start">Data Usage</div>
              <div className="justify-content-end">0.00 GB of 2 GB</div>
            </div>
            </div>
            {/* <div className="d-flex">
              <div className="telePage_inner">
                
              </div>
              <div className="telePage_inner text-center">
                
              </div>
            </div> */}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Plan;
