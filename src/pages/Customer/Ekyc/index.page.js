import React from "react";
import { Card } from "react-bootstrap";
import { PageHeader} from "../../../components";


function Ekyc() {
  
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | E-KYC" />
        </div>
      </div>    
      <Card className="ekycPage cardHeight h-100">
          <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="conversation_upload">
                <em className="icon icon-bg ni ni-camera-fill" />
                <label>
                  <input 
                    name="upload"
                    type="file"
                  />
                    Upload Picture <span className="splash-upload"/>
                </label>
              </div>
          </Card.Body>
      </Card>  
    </>
  );
}

export default Ekyc;
