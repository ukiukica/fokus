import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createReview, getReviews, editReview, removeReview } from "../../store/reviews";

import "./EditReview.css"

function EditReview({ reviews, cameraId, reviewId, setShowEditReview }) {

    const dispatch = useDispatch();
    const history = useHistory();

    let userId = useSelector((state) => state.session.user.id);

    const currentReview = reviews[reviewId];

    const [content, setContent] = useState(currentReview.content);
    const [showErrors, setShowErrors] = useState(false)
    const [validationErrors, setValidationErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value)

    useEffect(() => {
        const errors = [];

        if (!content.length) errors.push("Content is required");
        if (content.length > 2000) errors.push("Review must be 2000 characters or less!")

        setValidationErrors(errors)

    }, [content]);


    const deleteReview = async (e) => {
        e.preventDefault();

        await dispatch(removeReview(currentReview))
        await dispatch((getReviews()))
        setShowEditReview(false)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
            return
        }
        const payload = {
            content,
            "camera_id": cameraId,
            "user_id": userId
        }
        await dispatch(editReview(payload, reviewId))
        setValidationErrors([]);
        await dispatch((getReviews()))
        setShowEditReview(false)
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
            >
                <div className={showErrors ? '' : 'hidden'}>
                    <div className="errors">
                        {validationErrors.map(error => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <input
                        className='form-input review'
                        type='text'
                        name='content'
                        placeholder='Write something here...'
                        onChange={updateContent}
                        value={content}
                    />
                </div>
                <div id="edit-review-btns-div">
                    <button
                        class="post"
                        type='submit'
                    > Save Changes
                    </button>
                    <button class="cancel" onClick={deleteReview}>Delete Review</button>
                </div>
            </form>
        </>
    )
}

export default EditReview;
