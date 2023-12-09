import React from "react";
import { Card } from "react-bootstrap";
import { PageHeader } from "../../../components";
// import DataTable from "../../../components/UiElement/DataTable";
// import { Formik } from "formik";

function PostBox() {
  return (
    <>
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <PageHeader heading="Home | Post box" />
        </div>
      </div>
      <Card className="telePage cardHeight h-100">
        <Card.Body className="p-0">
          <div className="telePage_cnt">
            <div className="telePage_inner telePage_inner-full">
              <div className="dataTablePhone">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sender By</th>
                      <th scope="col">Message / Attachment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">Admin</div>
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit                       
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          Admin
                        </div>
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          Admin
                        </div>
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          Admin
                        </div>
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PostBox;
