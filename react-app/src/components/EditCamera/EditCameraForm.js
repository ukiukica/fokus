import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";

import { createCamera, getCameras, editCamera, removeCamera, uploadImages } from "../../store/cameras";

import UploadImages from "../UploadImages/UploadImages";
import UploadFilmRoll from "../UploadImages/UploadFilmRoll"
import ExistingImages from "./ExistingImages"

import "../AddCamera/CameraForm.css";
import '../../context/Modal.css'


function EditCameraForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    let userId = useSelector((state) => state.session.user.id)
    const categories = useSelector((state) => state.categories)
    const cameras = useSelector((state) => state.cameras)

    const { cameraId } = params;
    const currentCamera = cameras[cameraId]

    const categoriesArr = Object.values(categories)
    const productImagesArr = currentCamera?.images.filter(image => image.film_roll === false)
    const filmRollArr = currentCamera?.images.filter(image => image.film_roll === true)


    const [brand, setBrand] = useState(currentCamera?.brand);
    const [model, setModel] = useState(currentCamera?.model);
    const [filmType, setFilmType] = useState(currentCamera?.film_type);
    const [otherSpecs, setOtherSpecs] = useState(currentCamera?.other_specs);
    const [amount, setAmount] = useState(currentCamera?.amount);
    const [inventory, setInventory] = useState(currentCamera?.inventory);
    const [category, setCategory] = useState(currentCamera?.category.id);
    const [images, setImages] = useState([]);
    const [filmRoll, setFilmRoll] = useState([]);
    const [imageLoading, setImageLoading] = useState(false)
    const [showImageUpload, setShowImageUpload] = useState(false)
    const [reveal, setReveal] = useState("+")
    const [showErrors, setShowErrors] = useState(false)
    const [validationErrors, setValidationErrors] = useState([]);


    const updateBrand = (e) => setBrand(e.target.value)
    const updateModel = (e) => setModel(e.target.value)
    const updateFilmType = (e) => setFilmType(e.target.value)
    const updateOtherSpecs = (e) => setOtherSpecs(e.target.value)
    const updateAmount = (e) => setAmount(e.target.value)
    const updateInventory = (e) => setInventory(e.target.value)
    const updateCategory = (e) => setCategory(e.target.value)

    console.log("PROD IMG ARR: ", productImagesArr)


    const addImages = (images, cameraId) => {
        images.forEach(async (image) => {
            const imageData = {
                image: image,
                imageUrl: image.filename,
                filmRoll: false,
                cameraId: cameraId
            }
            await dispatch(uploadImages(imageData))
        })
    }

    const addFilmRoll = (images, cameraId) => {
        images.forEach(async (image) => {
            const imageData = {
                image: image,
                imageUrl: image.filename,
                filmRoll: true,
                cameraId: cameraId
            }
            await dispatch(uploadImages(imageData))
        })
    }


    useEffect(() => {
        const errors = [];

        if (!brand?.length) errors.push("Name of the brand is required!");
        if (brand.length > 50) errors.push("Name of the brand must not exceed 50 characters!")
        if (!model?.length) errors.push("Model of the brand is required!");
        if (model.length > 50) errors.push("Name of the model must not exceed 50 characters!")
        if (otherSpecs.length > 500) errors.push("Specs must not exceed 500 characters!")
        if (!filmType?.length) errors.push("Film Type is required!");
        if (!category) errors.push("Category is required! Please select 'Unknown' if unsure.");
        if (amount <= 0) errors.push("Price amount is required!");
        if (inventory <= 0) errors.push("Quantity of items sold is required!");
        // if (productImagesArr.length < 1 || images.length < 1) errors.push('Please submit at least one image')

        setValidationErrors(errors)

    }, [brand, model, otherSpecs, filmType, category, amount, inventory, images]);

    const deleteCamera = async (e) => {
        e.preventDefault();

        await dispatch(removeCamera(currentCamera))
        history.push('/cameras')
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
            return
        }
        if (!validationErrors.length) {
            const payload = {
                brand,
                model,
                "film_type": filmType,
                "other_specs": otherSpecs,
                amount,
                inventory,
                "category_id": category,
                "user_id": userId
            };
            setImageLoading(true)
            await dispatch(editCamera(payload, currentCamera.id));
            if (images.length) {
                const imageFiles = images.map((image) => image.file)
                await addImages(imageFiles, currentCamera.id);
                await addFilmRoll(imageFiles, currentCamera.id);
            }
            setValidationErrors([]);
            await dispatch(getCameras())
            history.push(`/cameras/${currentCamera.id}`)
        }
    }

    return (
        <>
            <div className="camera-form-page">
                <div id="back-camera-link-div">
                    <i className="fa-solid fa-arrow-left"></i>
                    <NavLink to={`/cameras/${cameraId}`} style={{ color: 'inherit', textDecoration: 'inherit' }}
                    > <button id="back-link">Back to Camera</button>
                    </NavLink>
                </div>
                <div className="form-div">
                    <form
                        className="camera-form"
                        onSubmit={onSubmit}>
                        <h2 className='post-cam-title'>Edit Camera Post</h2>
                        <div className={showErrors ? '' : 'hidden'}>
                            <div className="errors">
                                {validationErrors.map(error => (
                                    <p key={error}>{error}</p>
                                ))}
                            </div>
                        </div>
                        <div className='inputs-div'>
                            <div className="left-side-form">
                                <label className='form-label'>
                                    Brand
                                    <input
                                        className='form-input'
                                        type='text'
                                        name='brand'
                                        onChange={updateBrand}
                                        value={brand}
                                    />
                                </label>

                                <label className='form-label'>
                                    Model
                                    <input
                                        className='form-input'
                                        type='text'
                                        name='model'
                                        onChange={updateModel}
                                        value={model}
                                    />
                                </label>

                                <label className='form-label'>
                                    Other Specs
                                    <textarea
                                        className='form-input textarea'
                                        type='text'
                                        name='otherSpecs'
                                        onChange={updateOtherSpecs}
                                        value={otherSpecs}
                                    />
                                </label>
                            </div>

                            <div className="right-side-form">
                                <label className='form-label'>
                                    Price Amount $
                                    <input
                                        className='form-input'
                                        type='number'
                                        name='amount'
                                        placeholder="i.e. 29.99"
                                        step="0.01"
                                        min="0.01"
                                        max="1000.00"
                                        onChange={updateAmount}
                                        value={amount}
                                    />
                                </label>

                                <label className='form-label'>
                                    Inventory
                                    <input
                                        className='form-input'
                                        type='number'
                                        name='inventory'
                                        placeholder="i.e. 5"
                                        step="1"
                                        min="1"
                                        max="100"
                                        onChange={updateInventory}
                                        value={inventory}
                                    />
                                </label>

                                <label className='form-label'>
                                    Film Type
                                    <select
                                        className='form-select'
                                        name='filmType'
                                        onChange={updateFilmType}
                                        value={filmType}
                                    >
                                        <option disabled selected value=''>Choose</option>
                                        <option value='35mm'>35mm</option>
                                        <option value='120mm'>120mm</option>
                                        <option value='600'>600</option>
                                        <option value='SX-70'>SX-70</option>
                                    </select>
                                </label>

                                <label className='form-label'>
                                    Category
                                    <select
                                        className='form-select'
                                        name='category'
                                        onChange={updateCategory}
                                        value={category}
                                    >
                                        <option disabled selected value=''>Choose</option>
                                        {categoriesArr.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="current-imgs-div">
                            <h3 id="current-imgs">Current Images</h3>
                            {productImagesArr?.length < 2 && (
                                <p className="p-warning">At least one photo has to remain</p>
                            )}
                            <div id="existing-img-div">
                                <ExistingImages productImagesArr={productImagesArr} />
                            </div>
                        </div>
                        <div id="additional-images-div">
                            <h3>Upload Additional Images</h3>
                            <button className="reveal-btn" onClick={(e) => {
                                e.preventDefault();
                                setShowImageUpload(showImageUpload ? false : true);
                                setReveal(reveal === "+" ? "-" : "+")
                            }}>{reveal}</button>
                        </div>

                        {showImageUpload && (
                            <div className="image-uploader">
                                <div>
                                    <h3 className="upload-img-title">Upload Camera Images</h3>
                                    <UploadImages images={images} setImages={setImages} />
                                </div>
                                <div>
                                    <h3 className="upload-img-title">Upload Film Roll</h3>
                                    <UploadFilmRoll filmRoll={filmRoll} setFilmRoll={setFilmRoll} />
                                </div>

                            </div>
                        )}
                        <div className="form-btns-div">
                            <div className="submit-cancel-div">
                                <button
                                    className='cam-form-btn post'
                                    type='submit'
                                >Submit
                                </button>
                                <button
                                    className='cam-form-btn cancel'
                                    onClick={deleteCamera}
                                >Delete Camera
                                </button>
                                {(imageLoading) && <p>Submitting...</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCameraForm;
