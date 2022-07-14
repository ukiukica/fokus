import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";

import ImageGallery from 'react-image-gallery';

import EditCameraModal from "../EditCamera/EditCameraModal";
import AddReview from "../AddReview/AddReviewForm";

import './CameraPage.css'
import '../../context/Buttons.css'
import '../../context/Misc.css'
import SingleReview from "../SingleReview/SingleReview";


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


    const cameraUser = users[currentCamera?.user_id]?.username
    const cameraReviews = reviewsArr?.filter(review => review.camera_id === parseInt(cameraId))


    const [showFilmRoll, setShowFilmRoll] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);
    const [showEditReview, setShowEditReview] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

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
                                <p>Posted on: {formatDate(currentCamera.created_at)}</p>
                                {/* <p>{new Date(currentCamera?.updatedAt).toLocaleDateString(undefined, options)}</p> */}
                                {currentCamera?.user_id === sessionUser?.id ?
                            <NavLink to={`/cameras/${cameraId}/edit`} exact={true}>
                                <button className="add-cart-edit-post-btn">Edit Post</button>
                            </NavLink>
                            :
                            <button
                            className="add-cart-edit-post-btn"
                            
                            >Add to Cart</button>
                        }
                            </div>
                        </div>


                    </div>
                    <div id="reviews-section">
                        <p id="reviews-title">Reviews</p>
                        {sessionUser ?
                            <>
                                <button id="post-review-btn" onClick={() => setShowAddReview(true)}
                                >Leave a Review
                                </button>
                                {showAddReview && (
                                    <>
                                        <AddReview cameraId={cameraId} setShowAddReview={setShowAddReview} />
                                        {/* <button id="cancel-edit" onClick={() => setShowAddReview(false)}
                                        >Cancel
                                        </button> */}
                                    </>
                                )}
                            </>
                            :
                            <p>Log in to leave a review!</p>
                        }
                        {cameraReviews?.map((review) => (
                            <SingleReview key={review.id}
                                reviews={reviews} users={users} sessionUser={sessionUser} formatDate={formatDate} review={review} cameraId={cameraId} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CameraPage;
