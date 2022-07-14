import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./UploadImages.css";

function UploadFilmRoll({ filmRoll, setFilmRoll }) {
  const maxNumber = 6;

  const onChange = (imageList) => {
    // console.log(imageList);
    setFilmRoll(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={filmRoll}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <div className="add-remove-btn-div">
              <button
              className="add-img-btn"
                style={isDragging ? { color: "green" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button className="remove-all-btn" onClick={onImageRemoveAll}>Remove all images</button>
            </div>
            <div className="selected-img-div">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100"/>
                  <div className="image-item__btn-wrapper">
                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                    <button className="remove-btn" onClick={() => onImageRemove(index)}>x</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadFilmRoll
