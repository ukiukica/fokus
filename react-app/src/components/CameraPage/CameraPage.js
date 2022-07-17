import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";


import Carousel from "../Carousel/Carousel";
import AddReview from "../AddReview/AddReviewForm";
import { editCamera } from "../../store/cameras";

import './CameraPage.css'
import '../../context/Buttons.css'
import '../../context/Misc.css'
import SingleReview from "../SingleReview/SingleReview";


function CameraPage() {

    const params = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    const users = useSelector((state) => state.users)
    const reviews = useSelector((state) => state.reviews)

    const { cameraId } = params;

    const currentCamera = cameras[cameraId]

    // const productImagesArr = currentCamera?.images.filter(image => image.film_roll === false)
    // const filmRollArr = currentCamera?.images.filter(image => image.film_roll === true)
    const reviewsArr = Object.values(reviews)


    const cameraUser = users[currentCamera?.user_id]?.username
    const cameraReviews = reviewsArr?.filter(review => review.camera_id === parseInt(cameraId))


    const [showFilmRoll, setShowFilmRoll] = useState(false);
    const [showAddReview, setShowAddReview] = useState(false);
    const [showEditReview, setShowEditReview] = useState(false);

    const sessionCameras = sessionStorage?.getItem(`${sessionUser?.id}`)?.split(",")


    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const reduceInventory = async () => {
        const payload = {
            "brand": currentCamera?.brand,
            "model": currentCamera?.model,
            "film_type": currentCamera?.film_type,
            "other_specs": currentCamera?.other_specs,
            "amount": currentCamera?.amount,
            "inventory": currentCamera?.inventory - 1,
            "category_id": currentCamera?.category_id,
            "user_id": currentCamera?.user_id
        }
        await dispatch(editCamera(payload, cameraId))
    }

    const saveToSession = (e, userId, cameraId) => {
        e.preventDefault();

        let currentStorage = sessionStorage.getItem(`${userId}`);
        if (!currentStorage) {
            sessionStorage.setItem(`${userId}`, cameraId);
            reduceInventory();
            return
        }
        currentStorage += `,${cameraId}`;
        sessionStorage.setItem(`${userId}`, currentStorage);
        reduceInventory();
        return
    }


    // let images = [];
    // let filmRoll = [];
    // productImagesArr?.forEach((image) => (
    //     images.push({ "original": image.image_url, "thumbnail": image.image_url })
    // ))
    // filmRollArr?.forEach((image) => (
    //     filmRoll.push({ "original": image.image_url, "thumbnail": image.image_url })
    // ))

    console.log("THIS", sessionCameras)
    return (
        <div>

            {currentCamera && (
                <div id="camera-page">
                    <div id="back-link-div">
                        <i className="fa-solid fa-arrow-left"></i>
                        <NavLink to='/cameras' style={{ color: 'inherit', textDecoration: 'inherit' }}
                        > <button id="back-link">Back to Catalogue</button>
                        </NavLink>
                    </div>
                    <div id="camera-section">
                        <div id='carousel-div'>
                            <div id="carousel-btns-div">
                                <button className="carousel-bttn" onClick={() => setShowFilmRoll(false)}>
                                    <i class="fa-solid fa-image"></i>
                                </button>
                                <button className="carousel-bttn" onClick={() => setShowFilmRoll(true)}>
                                    <i class="fa-solid fa-film"></i>
                                </button>
                            </div>
                            <div id="carousel-div">
                                {showFilmRoll ? <Carousel images={currentCamera.film_roll} /> : <Carousel images={currentCamera.images} />}
                            </div>

                        </div>
                        <div id="camera-specs" key={currentCamera.id}>
                            <p id="camera-title">{`${currentCamera.brand} ${currentCamera.model}`}</p>
                            <p id="film-type">Film Type: {currentCamera.film_type}</p>
                            {currentCamera.category.name !== "Unknown" && (
                                <p id="category">Category: {currentCamera.category.name}</p>
                            )}
                            <p id="other-specs">{currentCamera.other_specs}</p>
                            <p id="price">${currentCamera.amount}</p>

                            <div>
                                {currentCamera.inventory === 0 ?
                                    <p className="inventory" style={{ color: 'red' }}>Out of Stock</p>
                                    :
                                    <>
                                        {currentCamera.inventory < 2 ?
                                            <p className="inventory" style={{ color: 'red' }}>Only {currentCamera.inventory} left in stock</p>
                                            :
                                            <p className="inventory">{currentCamera.inventory} left in stock</p>
                                        }
                                    </>
                                }
                                <p>Sold by: {cameraUser}</p>
                                <p>Posted on: {formatDate(currentCamera.created_at)}</p>
                                {/* <p>{new Date(currentCamera?.updatedAt).toLocaleDateString(undefined, options)}</p> */}
                                {currentCamera?.user_id === sessionUser?.id ?
                                    <NavLink to={`/cameras/${cameraId}/edit`} exact={true}>
                                        <button className="add-cart-edit-post-btn">Edit Post</button>
                                    </NavLink>
                                    :
                                    <>
                                        {sessionCameras?.includes(`${currentCamera.id}`) ?
                                            <p id="added-cart-p">Added to Cart!</p>
                                            :
                                            <button
                                                className="add-cart-edit-post-btn"
                                                onClick={(e) => saveToSession(e, sessionUser.id, currentCamera.id)}
                                            >Add to Cart</button>
                                        }
                                    </>
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
