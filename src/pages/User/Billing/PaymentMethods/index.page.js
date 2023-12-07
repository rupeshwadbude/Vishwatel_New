import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ModalComponent, PageHeader, Input as TextInput } from "../../../../components";

function PaymentMethods() {
  const [addPayment, setAddPayment] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
  const handleModalClose = () => {
    setAddPayment(false);
    setAddCardModal(false);
  }
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Payment Methods" />
        </div>
      </div>

      <Card className="telePage cardHeight h-100">
          <Card.Body className="p-0">
            <div className="telePage_cnt">
              <div className="telePage_head d-flex align-items-center justify-content-between">
                <h2>Payment Methods</h2>
                <em className="ni ni-plus" />
              </div>
              <div className="telePage_inner telePage_inner-full">
                <p className="numberInfo my-0 px-0 bg-transparent">
                 Saved payment methods can be used to auto refill your Vishwatel Account. 
                  <br />They are also used to pay for subscriptions renewals if your prepaid balance is low and auto refill is turned off.
                </p>
                <div className="text-center mt-5">
                  <button className="btn btn-success btn-lg" onClick={() => setAddPayment(true)}>Add payment Method <em className="ni ni-plus"/></button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        
        <ModalComponent 
          show={addPayment}
          onHandleCancel={handleModalClose}

          title="Select Payment method"
        >
          <div className="d-flex align-items-center justify-content-center">
            <img src="/assets/images/admin/visa.png" onClick={() => {setAddCardModal(true); setAddPayment(false)}} className="img-fluid me-3" width="130" height="100" alt="visa"/>
            <img src="/assets/images/admin/mastercard.png" className="img-fluid " width="130" height="100" alt="mastercard"/>
          </div>
          <div className="text-center ">
            <img src="/assets/images/admin/google-pay.png" className="img-fluid my-5" width="250" alt="googlePay"/>
            <img src="/assets/images/admin/paypal.png" className="img-fluid " height="100" width="250" alt="paypal"/>
          </div>
        </ModalComponent>

        <ModalComponent 
          show={addCardModal}
          onHandleCancel={handleModalClose}

          title="Add Credit Card"
        >
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="cardName" className="form-label">Name on Card</label>
                <TextInput 
                  id="cardName"
                  name="cardName"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNum" className="form-label">Card Number</label>
                <TextInput 
                  id="cardNum"
                  name="cardNum"
                  className="form-control form-control-lg"
                  placeholder="Enter Number"
                />
              </div>
              <Row>
                <Col sm={6}>
                  <div className="form-group">
                    <label htmlFor="code" className="form-label">Security Code</label>
                    <TextInput 
                      id="code"
                      name="code"
                      className="form-control form-control-lg"
                      placeholder="Security code"
                    />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group">
                    <label htmlFor="exDate" className="form-label">Expiry Date</label>
                    <TextInput 
                      id="exDate"
                      name="exDate"
                      className="form-control form-control-lg"
                      placeholder="MM/YY"
                    />
                  </div>
                </Col>
              </Row>
              <p>To register your payment method we need to <br/>
              charge $1.00 which will be added to your prepaid <br/>
              account.</p>
              <div className="text-center">
                <button className="btn btn-success ">Add Card <em className="ni ni-plus"/></button>
              </div>
            </form>
          </div>
        </ModalComponent>
    </>
  );
}

export default PaymentMethods;
