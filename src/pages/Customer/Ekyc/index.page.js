import React from "react";
import { Card } from "react-bootstrap";
import {  PageHeader} from "../../../components";


function Ekyc() {
  
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | E-KYC" />
        </div>
      </div>    
      <Card className="ekycPage h-100">
          <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="">
                <label>
                  <input 
                    name="upload"
                    type="file"
                  />
                  <span>
                    Upload Picture <span className="splash-upload"/>
                  </span>
                  <span className="splash-camera"/>
                </label>
              </div>
          </Card.Body>
      </Card>  
    </>
  );
}

export default Ekyc;
