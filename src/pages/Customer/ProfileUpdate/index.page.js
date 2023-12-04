import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Formik } from "formik";
import { Input as TextInput, PageHeader } from "../../../components";

function ProfileUpdate() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | General Settings" />
        </div>
      </div>
      <Card className="ekycPage h-100">
        <Card.Body className="">
          <Row className="justify-content-center">
            <Col md={5}>
              <Formik>
                <form>
                  <div className="userProfile text-center">
                    <div className="userProfile_img">
                      <label>
                        <img
                          src="/assets/images/admin/profile.jpg"
                          className="img-fluid profile"
                          alt="profile"
                        />
                        <input type="file" />
                        <em className="icon ni ni-camera-fill" />
                      </label>
                    </div>
                    <h2>Company Profile</h2>
                    <p>Manage your company name and logo</p>
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
