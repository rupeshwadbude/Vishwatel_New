import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ModalComponent, PageHeader, Select } from "../../../components";

function Ekyc() {
  const [addCardModal, setAddCardModal] = useState(false);
  const handleModalClose = () => {
    setAddCardModal(false);
  };
  const selectArray = [
    {
      id: 1,
      name: "Select Document"
    },
    {
      id: 2,
      name: "Adhar Card"
    },
    {
      id: 3,
      name: "License"
    }
  ];
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | E-KYC">
            {/* <Breadcrumb breadcrumb={breadcrumb} /> */}
          </PageHeader>
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
        <Card.Body className="p-0">
          <div className="telePage_cnt">
            <div className="telePage_head d-flex align-items-center justify-content-between">
              <h2>E-KYC</h2>
              <em
                className="ni ni-plus"
                onClick={() => setAddCardModal(true)}
              />
            </div>
            <div className="dataTablePhone mt-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Document Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Upload</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        Adhar Card
                      </div>
                    </td>
                    <td>Pending</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => setAddCardModal(true)}
                      >
                        Upload
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">Licanece</div>
                    </td>
                    <td>Pending</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => setAddCardModal(true)}
                      >
                        Upload
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        Adhar Card
                      </div>
                    </td>
                    <td>Pending</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => setAddCardModal(true)}
                      >
                        Upload
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        Adhar Card
                      </div>
                    </td>
                    <td>Pending</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => setAddCardModal(true)}
                      >
                        Upload
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ModalComponent
        show={addCardModal}
        onHandleCancel={handleModalClose}
        title="Add Document"
      >
        <div>
          <form>
            <div className="form-group mb-4">
              <label className="form-label">Select Document Type</label>
              <Select
                name="document"
                arrayOfData={selectArray}
                extraClassName="text-start"
                placeholder="Select Document"
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-label">Upload Document</label>
              <div className="conversation_upload ml-3">
                <em className="icon icon-bg ni ni-camera-fill" />
                <label>
                  <input name="upload" type="file" />
                  Upload Document <em className="icon ni ni-upload" />
                </label>
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-success">Add Document</button>
            </div>
          </form>
        </div>
      </ModalComponent>
    </>
  );
}

export default Ekyc;
