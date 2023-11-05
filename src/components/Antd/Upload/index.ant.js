import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useField } from "formik";
import Dragger from "antd/es/upload/Dragger";
import {
  modalNotification
  // removeSessionStorageToken,
} from "../../../utils";

function DocumentUploader({
  applyImageCropper = true,
  label = "",
  apiEndPoints,
  name,
  defaultImageUrl,
  aspect,
  children,
  callUpdateApi,
  mediaUrl,
  stepTwoImage,
  validateFileType = ["image/jpeg", "image/png", "image/jpg"],
  setUploadLoading,
  ...rest
}) {
  const [field, meta, helpers] = useField(name);
  const configs = { ...field, ...rest };
  if (meta && meta.touched && meta.error) {
    configs.error = true;
    configs.helperText = meta.error;
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = validateFileType.includes(file.type);

    if (!isJpgOrPng) {
      modalNotification({
        type: "error",
        message: `${
          applyImageCropper
            ? "text.common.imageOnlyMessgae"
            : "Please Upload Either Pdf , Docx or Doc"
        }`
      });
    }

    const isLt2M = file.size / 1024 / 1024 < 10;

    if (!isLt2M) {
      if (applyImageCropper) {
        modalNotification({
          type: "error",
          message: `${
            applyImageCropper && "text.common.imageSizeExceedingMessage"
          }`
        });
      }
    }

    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      if (setUploadLoading) {
        setUploadLoading(true);
      }
    } else {
      const { status, response } = info.file;
      if (status === "done") {
        getBase64(info.file.originFileObj, () => {
          if (setUploadLoading) {
            setUploadLoading(false);
          }
        });
        if (applyImageCropper) {
          modalNotification({
            type: "success",
            message: "Image uploaded successfully"
          });
          helpers.setValue(response.data.image);
        } else {
          modalNotification({
            type: "success",
            message: `${info.file.name} uploaded successfully`
          });
          helpers.setValue({
            url: response.data.url,
            name: info.file.name,
            path: response.data.image
          });
          mediaUrl({
            url: response.data.url,
            name: info.file.name,
            path: response.data.image
          });
        }
      } else if (status === "error") {
        modalNotification({
          type: "error",
          message:
            info?.file?.response?.message ||
            info?.file?.response?.error?.message,
          description: `${info.file.name} file upload failed. ${info.file.response.detail}`
        });
        // if (response.detail.search("authenticated") !== -1) {
        //   removeSessionStorageToken();
        // }
      }
    }
  };

  return (
    <Form.Item
      label={label}
      className="flex-col"
      name={name}
      help={meta.error && meta?.error && meta?.touched ? meta.error : ""}
      validateStatus={configs.error ? "error" : "success"}
    >
      <Dragger
        name={name}
        type="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={apiEndPoints}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        {...rest}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area</p>
      </Dragger>

      {/* <Upload
        name={name}
        type="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={apiEndPoints}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        {...rest}
      >
        {loading ? (
          <LoadingOutlined />
        ) : (
          <>
            <label
              htmlFor="uploadPhoto01"
              className="uploadStuff_upload d-flex flex-column align-items-center justify-content-center mb-0"
            >
              {(fileName && <ImageElement source="/file-icon.svg" />) ||
                stepTwoImage || (
                  <>
                    <em className="icon-upload" />
                    <span className="d-block">{t("text.common.document")}</span>
                  </>
                )}
            </label>
          </>
        )}
        {children}
      </Upload> */}
    </Form.Item>
  );
}

export default DocumentUploader;
