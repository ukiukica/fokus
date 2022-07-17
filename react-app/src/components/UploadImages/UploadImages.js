import React from "react";

import ImageUploading from "react-images-uploading";

import "./UploadImages.css";

function UploadImages({ images, setImages }) {
  const maxNumber = 6;

  const onChange = (imageList) => {
    // console.log(imageList);
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
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
              <p className="p-warning">Allowed image files: PNG, JPG, JPEG, and GIF.</p>
              <button
                className="add-img-btn"
                style={isDragging ? { color: "green" } : null}
                onClick={(e) => {
                  e.preventDefault()
                  onImageUpload()}}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button className="remove-all-btn" onClick={(e) => onImageRemoveAll(e)}>Remove all images</button>
            </div>
            <div className="selected-img-div">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                    <button className="remove-btn" onClick={(e) => {
                      e.preventDefault()
                      onImageRemove(index)}}
                      >x</button>
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

export default UploadImages
