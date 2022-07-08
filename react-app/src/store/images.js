const VIEW_IMAGES = "cameras/VIEW_IMAGES";

const view = (images) => ({
    type: VIEW_IMAGES,
    images,
});

export const getImages = () => async (dispatch) => {
    const response = await fetch("/api/images");

    if (response.ok) {
        const images = await response.json();
        console.log("IMAGES FROM THUNK", images)
        dispatch(view(images));
    }
}

const imagesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_IMAGES:
            // const normalizedImages = {};
            // action.images.forEach((image) => {
            //     normalizedImages[image.id] = image;
            // });
            return { ...action.images };
        default:
            return state;
    }
}

export default imagesReducer;
