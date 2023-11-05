import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";

import { ImageElement, logger, modalNotification } from "../../../utils";

function FileUploader({ uploadFileName, formData }) {
  const [val, setVal] = useState(formData?.values);
  let validFile = [];
  let validFileName = "";
  let fileIcon = "";
  function validateFileType(id) {
    try {
      let fileName = document.getElementById(id)?.value;
      let idxDot = fileName?.lastIndexOf(".") + 1;
      let extFile = fileName?.substr(idxDot, fileName.length)?.toLowerCase();
      if (fileName && !validFile?.includes(extFile)) {
        modalNotification({
          type: "error",
          message: `${`Please Upload ${validFileName}`}`
        });
        document.getElementById(id).value = "";
      } else {
        let fileDetail = document.getElementById(id);
        const fileSize = fileDetail?.files?.item(0)?.size;
        const fileMb = fileSize / 1024;
        let docDetails = {
          type: extFile,
          name: fileDetail?.files?.item(0)?.name,
          size: fileMb.toFixed(1),
          file: fileDetail?.files?.item(0)
        };
        formData?.setFieldValue(uploadFileName, docDetails);
      }
    } catch (error) {
      logger(error);
    }
  }

  return (
    <>
      <div className="fileUpload">
        <label htmlFor={uploadFileName}>
          <InboxOutlined />
          <h2>{t("text.common.clickHere")}</h2>
        </label>
        <input
          type="file"
          id={uploadFileName}
          name={uploadFileName}
          //   accept="application/pdf"
          onChange={() => validateFileType(uploadFileName)}
        />
        <br />
      </div>
      {val?.[uploadFileName]?.type && (
        <div className="d-flex align-items-center show-uploaded-file">
          <ImageElement
            source={fileIcon?.[val?.[uploadFileName]?.type]}
            alt={fileIcon?.[val?.[uploadFileName]?.type]}
          />
          <h5 className="m-3">{val?.[uploadFileName]?.name}</h5>

          <button
            type="button"
            onClick={() => {
              formData?.setFieldValue(uploadFileName, null);
              let newData = { ...val };
              delete newData[uploadFileName];
              newData[uploadFileName] = null;
              setVal({ ...newData });
              document.getElementById(uploadFileName).value = "";
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
}

export default FileUploader;
