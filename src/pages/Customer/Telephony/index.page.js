import React from "react";
import { Card } from "react-bootstrap";
// import { Formik } from "formik";
import { CommonButton, ImageElement, ModalComponent, PageHeader} from "../../../components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Telephony() {

  const [getnumberModal, setGetnumberModal] = useState(false);

  const handleCloseModal = () => {
    setGetnumberModal(false);
  }

  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Telephony" />
        </div>
      </div>    
      <Card className="telePage cardHeight h-100">
          <Card.Body className="p-0">
            <div className="telePage_cnt">
              <div className="telePage_head d-flex align-items-center justify-content-between">
                <h2>Phone Number</h2>
                <em className="ni ni-plus"/>
              </div>
              <div className="telePage_inner text-center">
                <div className="position-relative">
                  <video width="100%" height="360" src="/assets/images/admin/video.mp4" />
                  <Link to="" className="playIcon">
                    <em className="icon ni ni-play-fill"/>
                  </Link>
                </div>
                <p className="mb-0 mt-4">You can purchase local phone numbers in any country. incoming call can<br/> 
                be answered in the app or forwarded to any mobile phone number at the<br/> 
                cost of a local call.</p>

                <Link to="" onClick={() => setGetnumberModal(true)} className="btn btn-secondary mt-4">Get a Local Phone Number</Link>
              </div>
            </div>
          </Card.Body>
      </Card>  

      <ModalComponent
        backdrop
        show={getnumberModal}
        extraTitleClassName="d-none"
        modalExtraClass="signupModal"
      >
        <div className="text-center">
          <div className="">
            <ImageElement
              previewSource="/assets/images/admin/signup-success.png"
              className="img-fluid"
            />
          </div>
          <h3 className="mt-3">Sign Up Successfully</h3>
          <p>
            You have successfully sign Up, <br />
            You can close this window and continue using <br />
            the Vishwatel service.
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <CommonButton
              extraClassName="btn-lg btn-inline justify-content-center me-3"
              variant="primary"
              // onClick={() => {
              //   setSigninModal(true);
              //   setSignupModal(false);
              // }}
            >
              Sign In
            </CommonButton>

            <CommonButton
              extraClassName="btn-lg btn-inline justify-content-center"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </CommonButton>
          </div>
        </div>
      </ModalComponent>
    </>
  );
}

export default Telephony;
