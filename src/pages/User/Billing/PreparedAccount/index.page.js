import React from "react";
import { Card } from "react-bootstrap";
import { PageHeader, Select } from "../../../../components";

function PrepaidAccount() {
  const moneyArray = [
    {
      id: 1,
      name: "$100"
    },
    {
      id: 2,
      name: "$200"
    }
  ];
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Billing > Prepaid Account" />
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
        <Card.Body className="p-0">
          <div className="telePage_cnt">
            <div className="telePage_head d-flex align-items-center justify-content-between">
              <h2>Prepaid Account</h2>
              <em className="ni ni-plus" />
            </div>
            <div className="telePage_inner text-center">
              <div className="prepare">
                <div className="prepareCard">
                  <h2 className="prepareCard_bal">$56.50</h2>
                  <p>Current Balance</p>
                </div>

                <button className="btn btn-success btn-lg">
                  Refil <em className="ms-2 icon ni ni-money" />
                </button>
                <h6 className="my-4">Notify me when account goes below</h6>
                <Select
                  name="money"
                  arrayOfData={moneyArray}
                  extraClassName="text-start"
                  placeholder="Account balance"
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PrepaidAccount;
