const ADD_REVIEW = "reviews/ADD_REVIEW";
const VIEW_REVIEWS = "reviews/VIEW_REVIEWS";
const EDIT_REVIEW = "reviews/EDIT_REVIEW"
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

const create = (newReview) => ({
  type: ADD_REVIEW,
  newReview,
});

const view = (reviews) => ({
  type: VIEW_REVIEWS,
  reviews,
});

const update = (review) => ({
  type: EDIT_REVIEW,
  review
})

const remove = (review) => {
  return {
    type: REMOVE_REVIEW,
    review,
  }
}

export const getReviews = () => async (dispatch) => {
    const response = await fetch("/api/reviews");

    if (response.ok) {
      const reviews = await response.json();
      dispatch(view(reviews));
    }
  };


  const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
    //   case ADD_CAMERA:
    //     const addState = { ...state, [action.newCamera.id]: action.newCamera };
    //     return addState;
      case VIEW_REVIEWS:
        const normalizedReviews = {};
        action.reviews.reviews.forEach((review) => {
          normalizedReviews[review.id] = review;
        });
        return { ...normalizedReviews };
    //   case EDIT_CAMERA:
    //     return {
    //       ...state,
    //       [action.camera.id]: action.camera
    //     }
    //   case REMOVE_CAMERA:
    //     const newState = { ...state };
    //     delete newState[action.camera.id]
    //     return newState;
      default:
        return state;
    }
  }

  export default reviewsReducer;
