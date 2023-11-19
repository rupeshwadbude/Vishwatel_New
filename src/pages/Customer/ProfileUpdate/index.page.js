import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Input as TextInput,PageHeader,  UploadInput} from "../../../components";

function ProfileUpdate() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Profile Update" />
        </div>
      </div>    
      <Card className="ekycPage h-100">
          <Card.Body className="">
            <Row className="justify-content-center">
                <Col md={5}>
                    <Formik>
                    <form>
                        <div className="userProfile">
                        <UploadInput
                            // apiEndPoints={Common.media("user", "image")}
                            className="border-0 bg-transparent"
                            name="file"
                            type="file"
                            // defaultImageUrl={
                            //     userData?.profileImageUrl ||
                            //     `${config.IMAGE_URL}/userImage.png`
                            // }
                            validateFileType={[
                                "image/jpeg",
                                "image/png",
                                "image/jpg",
                            ]}
                            // setFieldValue={props.handleChange}
                            >
                            <label htmlFor="upload-img1">
                                <em className="splash-camera" />
                            </label>
                        </UploadInput>
                        </div>
                        
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="name">
                                    Comapny Name
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <TextInput
                                    id="name"
                                    className="form-control form-control-lg"
                                    name="company name"
                                    disabled={false}
                                    variant="standard"
                                    type="text"
                                    placeholder="company name"
                                    setFieldValue=""
                                    icon=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="companyweb">
                                    Company Website
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <TextInput
                                    id="companyweb"
                                    className="form-control form-control-lg"
                                    name="companyWebsite"
                                    disabled={false}
                                    variant="standard"
                                    type="text"
                                    placeholder="Comapny Wesbite"
                                    setFieldValue=""
                                    icon=""
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" htmlFor="companyweb">
                                    Company Website
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <textarea
                                    className="form-control form-control-lg"
                                    name="companyWebsite"
                                    type="textarea"
                                    placeholder="Comapny Wesbite"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            {/* <CommonButton
                            extraClassName="btn-lg btn-block"
                            variant="primary"
                            // loading={loading}
                            >
                            </CommonButton> */}
                        </div>
                        </form>
                    </Formik>
                
                </Col>
            </Row>
          </Card.Body>
      </Card>  
    </>
  );
}

export default ProfileUpdate;
