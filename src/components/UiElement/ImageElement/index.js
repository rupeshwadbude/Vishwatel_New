import React from "react";
import config from "../../../config";

function ImageElement({
  previewSource = "",
  source,
  imageFor = "user",
  alt = "image",
  ...rest
}) {
  const imagePath = {
    user: config.IMAGE_URL,
    admin: config.ADMIN_IMAGE_URL,
  };
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} />
      ) : (
        <>
          {source ? (
            <img src={`${imagePath[imageFor]}/${source}`} alt={alt} {...rest} />
          ) : (
            <img
              src={`${imagePath[imageFor]}/profile-img.jpg`}
              alt="userImage"
            />
          )}
        </>
      )}
    </>
  );
}

export default ImageElement;
