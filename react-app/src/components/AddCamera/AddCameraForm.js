import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCamera, getCameras, uploadImages } from "../../store/cameras";
import UploadImages from "../UploadImages/UploadImages"
import UploadFilmRoll from "../UploadImages/UploadFilmRoll"

import "./AddCamera.css";
import "../../context/Buttons.css"
import "../../context/Misc.css"

function AddCameraForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    let userId = useSelector((state) => state.session.user.id)
    const categories = useSelector((state) => state.categories)

    const categoriesArr = Object.values(categories)



    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [filmType, setFilmType] = useState("");
    const [otherSpecs, setOtherSpecs] = useState("");
    const [amount, setAmount] = useState("");
    const [inventory, setInventory] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [filmRoll, setFilmRoll] = useState([]);
    const [imageLoading, setImageLoading] = useState(false)
    const [showFilmRollUpload, setShowFilmRollUpload] = useState(false)
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

    const addFilmRoll = (filmRoll, cameraId) => {
        filmRoll.forEach(async (image) => {
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

        if (!brand.length) errors.push("Name of the brand is required");
        if (!model.length) errors.push("Model of the brand is required");
        if (!filmType.length) errors.push("Film Type is required");
        if (amount <= 0) errors.push("Price amount is required");
        if (inventory <= 0) errors.push("Quantity of items sold is required");
        if (images.length < 1) errors.push('Please submit at least one image')

        setValidationErrors(errors)

    }, [brand, model, filmType, amount, inventory, images]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
        }
        else {
            const imageFiles = images.map((image) => image.file)
            const filmRollFiles = filmRoll.map((image) => image.file)
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
            const newCamera = await dispatch(createCamera(payload));
            const cameraId = newCamera.id;
            await addImages(imageFiles, cameraId);
            await addFilmRoll(filmRollFiles, cameraId);
            setValidationErrors([]);
            await dispatch(getCameras())
            history.push(`/cameras/${cameraId}`)
        }
    }

    return (
        <div id="add-camera-page">
            <div id="form-div">
                <form
                    id="camera-form"
                    onSubmit={onSubmit}>
                    <h2 id='post-cam-title'>Post a Camera</h2>
                    <div className={showErrors ? '' : 'hidden'}>
                        <div className="errors">
                            {validationErrors.map(error => (
                                <p key={error}>{error}!</p>
                            ))}
                        </div>
                    </div>
                    <div className='inputs-div'>
                        <div id="left-side-form">
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

                        <div id="right-side-form">
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
                                    <option value={null}>I don't know</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="image-uploader">
                        <div>
                            <h3 className="upload-img-title">Upload Camera Images</h3>
                            <UploadImages images={images} setImages={setImages} />
                        </div>
                        <div className="film-roll-upload-div">
                            <p id="film-roll-p">Upload photos taken by this camera to give customers an immersive experience</p>
                            <div className="film-roll-title">
                                <h3 className="upload-img-title">Upload Camera Film Roll</h3>
                                <button className="reveal-btn" onClick={() => {
                                    setShowFilmRollUpload(showFilmRollUpload ? false : true);
                                    setReveal(reveal === "+" ? "-" : "+")
                                }}>{reveal}</button>
                            </div>
                            {showFilmRollUpload &&
                                <UploadFilmRoll filmRoll={filmRoll} setFilmRoll={setFilmRoll} />
                            }
                        </div>
                    </div>

                    <div id="form-btns-div">
                        <button
                            className='cam-form-btn post'
                            type='submit'
                        >Post It
                        </button>
                        <button
                            className='cam-form-btn cancel'
                            onClick={() => history.push('/cameras')}
                        >Cancel
                        </button>
                    </div>
                    {(imageLoading) && <p>Posting...</p>}
                </form>
            </div>
        </div>
    )
}

export default AddCameraForm;
