import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { PageHeader, DatePicker, Select } from "../../../../components";

function Receipt() {
  const selectArray = [
    {
      id: 1,
      name: "All Payments"
    },
    {
      id: 2,
      name: "Item1"
    },
    {
      id: 3,
      name: "Item2"
    }
  ]
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Billing > Receipt" />
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
        <Card.Body className="p-0">
          <div className="telePage_cnt">
            <div className="telePage_head d-flex align-items-center justify-content-between">
              <h2>Usage</h2>
            </div>
          </div>
          <div className="telePage_innerPage p-4">
            <h3>View your usage data</h3>
            <Row className="justify-content-between1">
              <Col md={3}>
                  <Select
                    name="data"
                    arrayOfData={selectArray}
                    extraClassName="text-start"
                    placeholder="Select"
                  />
              </Col>
              <Col md={3}>
                <DatePicker 
                  className="form-control form-control-lg"
                  placeholder="Select Date"
                  icon={<><em className="icon ni ni-calendar-booking-fill"/></>}
                />
              </Col>
            </Row>
            <div className="py-5 my-5 text-center">
              <h3>Our recipts will show up here once a payment has been made.</h3>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Receipt;
