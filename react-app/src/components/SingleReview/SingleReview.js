import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";

import EditReview from "../EditReview/EditReviewForm"

import '../../context/Buttons.css'
import '../../context/Misc.css'
import './SingleReview.css'

function SingleReview({reviews, users, sessionUser, formatDate, review, cameraId, }) {

    const [showEditReview, setShowEditReview] = useState(false);

    return (
        <>
            <div className="review-div">
                <p>{users[review.user_id]?.username}{ }</p>
                <p>{formatDate(review.updated_at)}</p>
                <p>{review.content}</p>

                <div>
                    {sessionUser && (
                        <>
                            {sessionUser?.id === review?.user_id && (
                                <>
                                    {showEditReview ?
                                        <>
                                            <EditReview reviews={reviews} cameraId={cameraId} reviewId={review.id} setShowEditReview={setShowEditReview} />
                                            <button onClick={() => setShowEditReview(false)}>Cancel</button>
                                        </>
                                        :
                                        <button onClick={() => setShowEditReview(true)}>Edit</button>
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
