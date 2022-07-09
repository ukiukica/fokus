import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCamera } from "../../store/cameras";
import "./AddCamera.css";
import '../../context/Modal.css'

function AddCameraForm({ closeModal }) {

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
    const [showErrors, setShowErrors] = useState(false)
    const [validationErrors, setValidationErrors] = useState([]);


    const updateBrand = (e) => setBrand(e.target.value)
    const updateModel = (e) => setModel(e.target.value)
    const updateFilmType = (e) => setFilmType(e.target.value)
    const updateOtherSpecs = (e) => setOtherSpecs(e.target.value)
    const updateAmount = (e) => setAmount(e.target.value)
    const updateInventory = (e) => setInventory(e.target.value)
    const updateCategory = (e) => setCategory(e.target.value)

    console.log("FILM TYPE: ", filmType)
    console.log("CATEGORY: ", category)

    useEffect(() => {
        const errors = [];

        if (!brand.length) errors.push("Name of the brand is required");
        if (!model.length) errors.push("Model of the brand is required");
        if (!filmType.length) errors.push("Film Type is required");
        if (amount <= 0) errors.push("Price amount is required");
        if (inventory <= 0) errors.push("Quantity of items sold is required");

        setValidationErrors(errors)

    }, [brand, model, filmType, amount, inventory]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validationErrors.length) {
            setShowErrors(true);
        }
        else {
            const payload = {
                brand,
                model,
                "film_type":filmType,
                "other_specs":otherSpecs,
                amount,
                inventory,
                "category_id":category,
                "user_id":userId
            };
            await dispatch(createCamera(payload));
            // history.push('/cameras')
            closeModal()
        }
    }

    return (
        <form
            onSubmit={onSubmit}>
            <h2>Post a Camera</h2>
            <div className={showErrors ? '' : 'hidden'}>
                <ul className="errors">
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
            <div>
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
                    Film Type
                    <select
                        className='form-select'
                        name='filmType'
                        onChange={updateFilmType}
                        value={filmType}
                    >
                        <option value=''>Choose</option>
                        <option value='35mm'>35mm</option>
                        <option value='120mm'>120mm</option>
                        <option value='600'>600</option>
                        <option value='SX-70'>SX-70</option>
                    </select>
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
                    Category
                    <select
                        className='form-select'
                        name='category'
                        onChange={updateCategory}
                        value={category}
                    >
                        <option value={null}>Choose</option>
                        {categoriesArr.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button
                // className='user-button'
                type='submit'
            >
                Post It
            </button>
        </form>
    )
}

export default AddCameraForm;
