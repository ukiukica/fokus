import React, { useState } from "react";

import EditReview from "../EditReview/EditReviewForm"

import '../../context/Buttons.css'
import '../../context/Misc.css'
import './SingleReview.css'

function SingleReview({reviews, users, sessionUser, formatDate, review, cameraId, }) {

    const [showEditReview, setShowEditReview] = useState(false);

    return (
        <>
            <div className="review-div">
                <p id="username" >{users[review.user_id]?.username}{ }</p>
                <p id="date" >{formatDate(review.updated_at)}</p>
                <p id="content">{review.content}</p>

                <div>
                    {sessionUser && (
                        <>
                            {sessionUser?.id === review?.user_id && (
                                <>
                                    {showEditReview ?
                                        <>
                                            <EditReview reviews={reviews} cameraId={cameraId} reviewId={review.id} setShowEditReview={setShowEditReview} />
                                            <button className="cancel-edit" onClick={() => setShowEditReview(false)}>Cancel Edit</button>
                                        </>
                                        :
                                        <button className="post edit-review" onClick={() => setShowEditReview(true)}>Edit</button>
                                    }
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default SingleReview;
