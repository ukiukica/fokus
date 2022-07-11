const ADD_CAMERA = "cameras/ADD_CAMERA";
const VIEW_CAMERAS = "cameras/VIEW_CAMERAS";
const EDIT_CAMERA = "cameras/EDIT_CAMERA"
const REMOVE_CAMERA = "cameras/REMOVE_CAMERA";

const create = (newCamera) => ({
  type: ADD_CAMERA,
  newCamera,
});

const view = (cameras) => ({
  type: VIEW_CAMERAS,
  cameras,
});

const update = (camera) => ({
  type: EDIT_CAMERA,
  camera
})

const remove = (camera) => {
  return {
    type: REMOVE_CAMERA,
    camera,
  }
}


export const createCamera = (payload) => async (dispatch) => {
  console.log("INSIDE THE THUNK");
  console.log("PAYLOAD: ", payload)
  const response = await fetch("/api/cameras/new", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newCamera = await response.json();

  if (newCamera) {
    dispatch(create(newCamera));
  }

  return newCamera;
};

export const getCameras = () => async (dispatch) => {
  const response = await fetch("/api/cameras");

  if (response.ok) {
    const cameras = await response.json();
    dispatch(view(cameras));
  }
};

export const editCamera = (payload, id) => async (dispatch) => {
  console.log("IN THE THUNK")
  console.log("PAYLOAD: ", payload)
  console.log("ID: ", id)
  const response = await fetch(`/api/cameras/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  console.log("RESPONSE: ", response)
  if (response.ok) {
    const editedCamera = await response.json();
    dispatch(update(editedCamera))
    return editedCamera;
  }
}

export const removeCamera = (camera) => async (dispatch) => {
  const response = await fetch(`/api/cameras/${camera.id}`, {
    method: "DELETE",
  })

  if (response.ok) {
    dispatch(remove(camera))
  }
  return camera;
}

//AWS
export const uploadImages = (imageData) => async (dispatch) => {
	const { imageUrl, filmRoll, cameraId, image } = imageData;

	const formData = new FormData();
	formData.append("image_url", imageUrl);
	formData.append("film_roll", filmRoll);
	formData.append("camera_id", cameraId);
	formData.append("image", image);

	const res = await fetch('/api/images/new', {
		method: "POST",
		body: formData,
	});

	if (res.ok) {
		return await res.json();
	}

}


const camerasReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CAMERA:
      const addState = { ...state, [action.newCamera.id]: action.newCamera };
      return addState;
    case VIEW_CAMERAS:
      const normalizedCameras = {};
      action.cameras.cameras.forEach((camera) => {
        normalizedCameras[camera.id] = camera;
      });
      return { ...normalizedCameras };
    case EDIT_CAMERA:
      return {
        ...state,
        [action.camera.id]: action.camera
      }
    case REMOVE_CAMERA:
      const newState = { ...state };
      delete newState[action.camera.id]
      return newState;
    default:
      return state;
  }
}

export default camerasReducer;
