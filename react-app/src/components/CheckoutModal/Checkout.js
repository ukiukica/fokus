import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import zipcodes from "zipcodes";
import SalesTax from "sales-tax";

import { getUsers } from "../../store/users";

import "./Checkout.css"
import StateSelectField from "./StateSelectField";

function Checkout({ subtotal, sessionCameras }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const [fullName, setFullName] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(undefined);
    const [shippingType, setShippingType] = useState(undefined);
    const [shippingPrice, setShippingPrice] = useState(undefined);
    const [salesTax, setSalesTax] = useState(undefined);
    const [total, setTotal] = useState(undefined);
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    const updateFullName = (e) => setFullName(e.target.value)
    const updateAddressLine1 = (e) => setAddressLine1(e.target.value)
    const updateAddressLine2 = (e) => setAddressLine2(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateShippingType = (e) => setShippingType(e.target.value)


    useEffect(() => {
        const errors = [];

        if (!fullName.length) errors.push("Name is required.");
        if (fullName.length > 100) errors.push("Name must be 100 characters or less.")
        if (!addressLine1.length) errors.push("Address is required.")
        if (addressLine1.length > 200) errors.push("Address must be 200 characters or less.")
        if (addressLine2.length > 200) errors.push("Address must be 200 characters or less.")
        if (!city.length) errors.push("City is required.")
        if (city.length > 50) errors.push("City must be 50 characters or less.")
        if (!state?.length) errors.push("State is required.")
        if (!zipcode) errors.push("Zip Code is required.")
        if (zipcode !== undefined && !zipcodes.lookup(zipcode)) errors.push("Zip Code is invalid.")
        if (zipcodes.lookup(zipcode)?.state !== state) errors.push("Zip Code does not match State.")
        if (!shippingType?.length) errors.push("Please select a shipping type.")

        setValidationErrors(errors)

    }, [fullName, addressLine1, addressLine2, city, state, shippingType, zipcode]);

    useEffect(() => {
        if (state) {
            SalesTax.getSalesTax("US", state)
                .then((tax) => {
                    setSalesTax(subtotal * tax.rate)
                })
        }
    }, [state])

    useEffect(() => {
        setShippingPrice(calculateShipping())
    }, [shippingType])

    useEffect(() => {
        setTotal(calculateTotal())
    }, [shippingPrice, salesTax])

    useEffect(() => {
        if (!validationErrors.length) {
            setShowErrors(false)
        }
    }, [validationErrors])

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function getOrderNumber() {
        return `${randomNumber(100, 999)}-${randomNumber(10000, 99999)}-${randomNumber(1000, 9999)}`
    }

    function getOrderItems() {
        const orderItems = [];
        sessionCameras?.forEach(camera => {
            orderItems.push(cameras[camera]?.brand + " " + cameras[camera]?.model + "," + cameras[camera]?.amount.toFixed(2))
        });
        return orderItems;
    }


    function calculateShipping() {
        if (shippingType === "Standard Shipping") return 7.99;
        if (shippingType === "Expedited Shipping") return 19.99;
        if (shippingType === "Lightning Shipping") return 49.99;

        return null;
    }

    function calculateTotal() {
        return subtotal + shippingPrice + salesTax;
    }

    const checkout = async (e) => {
        e.preventDefault()

        if (validationErrors.length) {
            setShowErrors(true);
            return
        }

        sessionStorage.removeItem(`${sessionUser.id}`)

        const payload = {
            "order_number": getOrderNumber(),
            "order_items": getOrderItems().join("%"),
            "full_name": fullName,
            "address": [addressLine1, addressLine2, city, state, zipcode].toString(),
            "shipping_type": shippingType,
            "subtotal": subtotal,
            "shipping_price": shippingPrice,
            "sales_tax": salesTax,
            "total": total,
            "user_id": sessionUser?.id
        }

        const response = await fetch("/api/orders/new", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const newOrder = await response.json();

        if (!newOrder["errors"]) {
            console.log("NEW ORDER: ", newOrder)
            dispatch(getUsers())
            history.push('/checkout')
        } else {
            validationErrors.push("Something went wrong. Please, try again later.")
            setShowErrors(true);
        }

    }


    return (
        <>
            <form
                onSubmit={checkout}
            >
                <h2 id="checkout-h2">Checkout</h2>
                <div className="checkout-page">
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

                                <label className='form-label zipcode-field'>
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
                        <div className="shipping-section">
                            <label className='form-label'>
                                Shipping Type
                                <select
                                    className='form-select shipping'
                                    name='shippingType'
                                    onChange={updateShippingType}
                                    value={shippingType}
                                >
                                    <option disabled selected value=''>Choose</option>
                                    <option value="Standard Shipping">Standard Shipping (4-5 business days)</option>
                                    <option value="Expedited Shipping">Expedited Shipping (2-3 business days)</option>
                                    <option value="Lightning Shipping">Lightning Shipping (1 business day)</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="order-summary">
                        <div id="summary-heading">
                            <p>Order Summary</p>
                        </div>
                        <div id="summary">
                            <div className="summary-item">
                                <p>Subtotal:</p>
                                <p>${subtotal?.toFixed(2)}</p>
                            </div>
                            <div className="summary-item">
                                <p>Sales Tax:</p>
                                <p>{salesTax ? `$${salesTax?.toFixed(2)}`: "--"}</p>
                            </div>
                            <div className="summary-item ship">
                                <p>Shipping Price: </p>
                                <p>{shippingPrice ? `$${shippingPrice}` : "--"}</p>
                            </div>
                                <div className="summary-item total">
                                    <p>Total:</p>
                                    <p>{isNaN(total) || !shippingPrice ? "--" : `$${total?.toFixed(2)}`}</p>
                                </div>

                        </div>
                        <button className="post" id="purchase" type="submit">Complete Purchase</button>
                    </div>
                </div>
                    <div className={showErrors ? '' : 'hidden'}>
                        <div className="errors checkout-err">
                            {validationErrors.map(error => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    </div>


            </form>
        </>
    )
}

export default Checkout;
