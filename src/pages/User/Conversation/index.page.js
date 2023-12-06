import React from "react";
import { Card } from "react-bootstrap";
import { Formik } from "formik";
import { Input as TextInput, PageHeader} from "../../../components";

function Conversation() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Conversation" />
        </div>
      </div>    
      <Card className="conPage cardHeight h-100">
          <Card.Body className="">
            <Formik>
              <form>
                <div className="conPage_search">
                  <div className="form-group">
                    <TextInput 
                      id="search"
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Type the name email address or phone number of a persoon"
                    />
                  </div>
                </div>
                <div className="conPage_chat empty">
                  <div className="emptychat text-center">
                  <em className="icon icon-bg ni ni-chat-fill" />
                      <h3>No conversation</h3>
                      <p>Doesnt look like you are part of<br/> any conversations yet.</p>
                  </div>
                </div>
                <div className="conPage_typeMsg">
                  <div className="form-group mb-0">
                    <TextInput 
                      id="search"
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Write something..."
                    />
                  </div>
                </div>
              </form>
            </Formik>
          </Card.Body>
      </Card>  
    </>
  );
}

export default Conversation;
