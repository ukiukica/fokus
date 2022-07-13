import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createReview } from "../../store/reviews";

import { getReviews } from "../../store/reviews";

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

        if (!content.length) errors.push("Content is required");

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
                    <ul className="errors">
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <input
                        // className='form-input'
                        type='text'
                        name='content'
                        placeholder='Write something here...'
                        onChange={updateContent}
                        value={content}
                    />
                </div>
                <button
                    type='submit'
                    > Post a Review
                    </button>
            </form>
        </>
    )
}

export default AddReview;
