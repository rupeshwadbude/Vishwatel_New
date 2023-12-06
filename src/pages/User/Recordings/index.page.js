import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Input as TextInput, DatePicker, PageHeader } from "../../../components";

function Recordings() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Dashboard | Recordings" />
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
          <Card.Body className="p-0">
            <div className="telePage_cnt">
              <div className="telePage_head d-flex align-items-center justify-content-between">
                <h2>Recordings</h2>
              </div>
            </div>
            <div className="p-4">
              <Row>
                <Col md={3}>
                  <DatePicker 
                    className="form-control form-control-lg"
                    placeholder="Select Date"
                    icon={<><em className="icon ni ni-calendar-booking-fill"/></>}
                  />
                </Col>
                <Col md={3}>
                  <TextInput 
                    className="form-control form-control-lg"
                    placeholder="Select for user or number"
                  />
                </Col>
                <Col md={2}>
                  <button className="btn btn-lg justify-content-center btn-success w-100">Download <em className="ms-2 icon ni ni-download"/></button>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
    </>
  );
}

export default Recordings;
