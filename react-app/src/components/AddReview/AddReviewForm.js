import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createReview, getReviews } from "../../store/reviews";

import "./AddReview.css"

function AddReview({ cameraId, setShowAddReview }) {

    const dispatch = useDispatch();
    const history = useHistory();

    let userId = useSelector((state) => state.session.user.id)


    const [content, setContent] = useState("");
    const [showErrors, setShowErrors] = useState(false)
    const [validationErrors, setValidationErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value)

    useEffect(() => {
        const errors = [];

        if (!content.length) errors.push("Content is required!");
        if (content.length > 2000) errors.push("Review must be 2000 characters or less!")

        setValidationErrors(errors)

    }, [content]);

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
        await dispatch(createReview(payload))
        setValidationErrors([]);
        await dispatch((getReviews()))
        setShowAddReview(false)
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
                        className='form-input post-review'
                        type='text'
                        name='content'
                        placeholder='Write something here...'
                        onChange={updateContent}
                        value={content}
                    />
                </div>
                <div id="post-review-btns">
                    <button
                        className="post"
                        type='submit'
                    > Post a Review
                    </button>
                    <button className="cancel" onClick={() => setShowAddReview(false)}>Cancel Edit</button>
                </div>
            </form>
        </>
    )
}

export default AddReview;
