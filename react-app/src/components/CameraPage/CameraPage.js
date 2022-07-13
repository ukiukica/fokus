import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";

import ImageGallery from 'react-image-gallery';

import EditCameraModal from "../EditCamera/EditCameraModal";
import AddReview from "../AddReview/AddReviewForm";
import EditReview from "../EditReview/EditReviewForm";

import './CameraPage.css'
import '../../context/Buttons.css'
import '../../context/Misc.css'


function CameraPage() {

    const params = useParams();

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    const users = useSelector((state) => state.users)
    const reviews = useSelector((state) => state.reviews)

    const { cameraId } = params;

    const currentCamera = cameras[cameraId]

    const productImagesArr = currentCamera?.images.filter(image => image.film_roll === false)
    const filmRollArr = currentCamera?.images.filter(image => image.film_roll === true)
    const reviewsArr = Object.values(reviews)
    // console.log("REVIEWS ARR: ", reviewsArr)


    const cameraUser = users[currentCamera?.user_id]?.username
    const cameraReviews = reviewsArr?.filter(review => review.camera_id === parseInt(cameraId))

    console.log("CAMERA REVIEWS: ", cameraReviews)

    const [showFilmRoll, setShowFilmRoll] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);
    const [showEditReview, setShowEditReview] = useState(false);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    let images = [];
    let filmRoll = [];
    productImagesArr?.forEach((image) => (
        images.push({ "original": image.image_url, "thumbnail": image.image_url })
    ))
    filmRollArr?.forEach((image) => (
        filmRoll.push({ "original": image.image_url, "thumbnail": image.image_url })
    ))


    return (
        <div>

            {productImagesArr && (
                <div id="camera-page">
                    <div id="back-link-div">
                        <i className="fa-solid fa-arrow-left"></i>
                        <NavLink to='/cameras' style={{ color: 'inherit', textDecoration: 'inherit' }}
                        > <button id="back-link">Back to Catalogue</button>
                        </NavLink>
                    </div>
                    <div id="camera-section">
                        <div id='carousel-div'>
                            <div>
                                <button className="carousel-bttn" onClick={() => setShowFilmRoll(false)}>Product Images</button>
                                <button className="carousel-bttn" onClick={() => setShowFilmRoll(true)}>Film Roll</button>
                            </div>
                            {showFilmRoll ? <ImageGallery items={filmRoll} /> : <ImageGallery items={images} />}

                        </div>
                        <div id="camera-specs" key={currentCamera.id}>
                            <p id="camera-title">{`${currentCamera.brand} ${currentCamera.model}`}</p>
                            <p id="film-type">Film Type: {currentCamera.film_type}</p>
                            <p id="other-specs">{currentCamera.other_specs}</p>
                            <p id="price">${currentCamera.amount}</p>

                            <div>
                                {currentCamera.inventory < 2 ?
                                    <p className="inventory" style={{ color: 'red' }}>Only {currentCamera.inventory} left in stock</p>
                                    :
                                    <p className="inventory">{currentCamera.inventory} left in stock</p>
                                }
                                <p>Sold by: {cameraUser}</p>
                                <p>Posted on: {currentCamera.created_at}</p>
                                {/* <p>{new Date(currentCamera?.updatedAt).toLocaleDateString(undefined, options)}</p> */}
                                <button id="add-cart-btn">Add to Cart</button>
                            </div>
                        </div>

                        {currentCamera?.user_id === sessionUser?.id && (
                            <EditCameraModal currentCamera={currentCamera} />
                        )}
                    </div>
                    <div id="reviews-section">
                        <p id="reviews-title">Reviews</p>
                        {sessionUser && (
                            <>
                                <button onClick={() => setShowAddReview(true)}
                                >Leave a Review
                                </button>
                                {showAddReview && (
                                    <>
                                        <AddReview cameraId={cameraId} setShowAddReview={setShowAddReview} />
                                        <button onClick={() => setShowAddReview(false)}
                                        >Cancel
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                        {cameraReviews?.map((review) => (
                            <div className="review-div" key={review.id}>
                                <p>{users[review.user_id]?.username}{ }</p>
                                <p>{review.updated_at}</p>
                                <p>{review.content}</p>
                                <div>
                                    {sessionUser.id === review?.user_id && (
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CameraPage;
