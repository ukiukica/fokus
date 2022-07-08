const ADD_CAMERA = "cameras/ADD_CAMERA";
const VIEW_CAMERAS = "cameras/VIEW_CAMERAS";
const REMOVE_CAMERA = "cameras/REMOVE_CAMERA";

const create = (newCamera) => ({
  type: ADD_CAMERA,
  newCamera,
});

const view = (cameras) => ({
  type: VIEW_CAMERAS,
  cameras,
});

const remove = (cameraId) => {
  return {
    type: REMOVE_CAMERA,
    cameraId,
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
    default:
      return state;
  }
}

export default camerasReducer;
