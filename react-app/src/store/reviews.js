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


export const createReview = (payload) => async (dispatch) => {
  // console.log("INSIDE THE THUNK");
  // console.log("PAYLOAD: ", payload)
  const response = await fetch("/api/reviews/new", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const newReview = await response.json();

  if (newReview) {
    dispatch(create(newReview));
  }

  return newReview;
};

export const getReviews = () => async (dispatch) => {
    const response = await fetch("/api/reviews");

    if (response.ok) {
      const reviews = await response.json();
      dispatch(view(reviews));
    }
  };

  export const editReview = (payload, id) => async (dispatch) => {
    // console.log("IN THE THUNK")
    // console.log("PAYLOAD: ", payload)
    // console.log("ID: ", id)
    const response = await fetch(`/api/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    // console.log("RESPONSE: ", response)
    if (response.ok) {
      const editedReview = await response.json();
      dispatch(update(editedReview))
      return editedReview;
    }
  }


  const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_REVIEW:
        const addState = { ...state, [action.newReview.id]: action.newReview };
        return addState;
      case VIEW_REVIEWS:
        const normalizedReviews = {};
        action.reviews.reviews.forEach((review) => {
          normalizedReviews[review.id] = review;
        });
        return { ...normalizedReviews };
      case EDIT_REVIEW:
        return {
          ...state,
          [action.review.id]: action.review
        }
    //   case REMOVE_CAMERA:
    //     const newState = { ...state };
    //     delete newState[action.camera.id]
    //     return newState;
      default:
        return state;
    }
  }

  export default reviewsReducer;
