import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./EditImages.css";

function EditFilmRoll({filmRoll, setFilmRoll}) {
  const maxNumber = 6;

  const onChange = (imageList) => {
    // console.log(imageList);
    setFilmRoll(imageList);
  };

  return (
    <div className="App">
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
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default EditFilmRoll
