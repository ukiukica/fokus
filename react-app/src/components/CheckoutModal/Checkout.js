import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import zipcodes from "zipcodes"

import "./Checkout.css"
import StateSelectField from "./StateSelectField";

function Checkout({subtotal}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session?.user);

    const [fullName, setFullName] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(undefined);
    const [shippingType, setShippingType] = useState("");
    const [shippingPrice, setShippingPrice] = useState(undefined);
    const [salesTax, setSalesTax] = useState(undefined);
    const [total, setTotal] = useState(undefined);
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    const updateFullName = (e) => setFullName(e.target.value)
    const updateAddressLine1 = (e) => setAddressLine1(e.target.value)
    const updateAddressLine2 = (e) => setAddressLine2(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)
    const updateShippingType = (e) => {
        setShippingType(e.target.value)
        calculateShipping()}
    const updateShippingPrice = (e) => setShippingPrice(e.target.value)
    const updateSalesTax = (e) => setSalesTax(e.target.value)
    const updateTotal = (e) => setTotal(e.target.value)

    // const hills = zipcodes.lookup(90210);
    console.log(shippingPrice)

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function getOrderNumber() {
        return `${randomNumber(100, 999)}-${randomNumber(10000, 99999)}-${randomNumber(1000, 9999)}`
    }

    function calculateShipping() {
        if (shippingType === "Standard Shipping") return setShippingPrice(7.99);
        if (shippingType === "Expedited Shipping") return setShippingPrice(19.99);
        if (shippingType === "Lightning Shipping") return setShippingPrice(49.99);

        return null;
    }

    const emptyCart = (e) => {
        e.preventDefault()

        sessionStorage.removeItem(`${sessionUser.id}`)

        // const payload = {
        //     "order_number": getOrderNumber(),
        //     "order_items":
        // }

        history.push('/checkout')
    }


    return (
        <>
            <form
                onSubmit={emptyCart}
            >
                <h2>Checkout</h2>
                <div className={showErrors ? '' : 'hidden'}>
                    <div className="errors">
                        {validationErrors.map(error => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <div className="checkout-form">
                    <div className="address-section">
                        <div className="address-section-left">
                            <label className='form-label'>
                                Full Name
                                <input
                                    className='form-input'
                                    type='text'
                                    name='fullName'
                                    onChange={updateFullName}
                                    value={fullName}
                                />
                            </label>

                            <label className='form-label'>
                                Address Line 1
                                <input
                                    className='form-input'
                                    type='text'
                                    name='addressLine1'
                                    onChange={updateAddressLine1}
                                    value={addressLine1}
                                />
                            </label>

                            <label className='form-label'>
                                Address Line 2 (optional)
                                <input
                                    className='form-input'
                                    type='text'
                                    name='addressLine2'
                                    onChange={updateAddressLine2}
                                    value={addressLine2}
                                />
                            </label>
                        </div>
                        <div className="address-section-right">
                            <label className='form-label'>
                                City
                                <input
                                    className='form-input'
                                    type='text'
                                    name='city'
                                    onChange={updateCity}
                                    value={city}
                                />
                            </label>

                            <StateSelectField updateState={updateState} state={state} />

                            <label className='form-label'>
                                Zip Code
                                <input
                                    className='form-input'
                                    type='number'
                                    name='zipcode'
                                    placeholder="i.e. 90210"
                                    onChange={updateZipcode}
                                    value={zipcode}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="checkout-section">
                        <label className='form-label'>
                            Shipping Type
                            <select
                                className='form-select'
                                name='shippingType'
                                onChange={updateShippingType}
                                value={shippingType}
                            >
                                <option disabled value=''>Choose</option>
                                <option value="Standard Shipping">Standard Shipping (4-5 business days)</option>
                                <option value="Expedited Shipping">Expedited Shipping (2-3 business days)</option>
                                <option value="Lightning Shipping">Lightning Shipping (1 business day)</option>
                            </select>
                        </label>
                        <div className="total-section">
                            <p>Subtotal: ${subtotal.toFixed(2)}</p>
                            <p>Sales Tax: ${salesTax}</p>
                            <p>Shipping Price: ${shippingPrice}</p>
                        </div>
                    </div>
                </div>
                <button onClick={(e) => emptyCart(e)}>Complete Purchase</button>

            </form>
        </>
    )
}

export default Checkout;
