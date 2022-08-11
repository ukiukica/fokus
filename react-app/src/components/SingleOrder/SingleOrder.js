import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import './SingleOrder.css'

function SingleOrder({ order }) {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const orderItems = []
    order?.order_items.split("%").forEach(orderItem => {
        orderItems.push(orderItem.split(","))
    })

    const address = order.address.split(",")
    const formattedAddress = [address.slice(0, address.length - 3), address.slice(address.length - 3)]
    // console.log(formattedAddress)

    return (
        <div className="order">
            <div id="order-heading">
                <div id="heading-left">
                    <p>Order Number:</p>
                    <p>{order.order_number}</p>
                </div>
                <div id="heading-right">
                    <p>Order placed:</p>
                    <p>{formatDate(order.created_at)}</p>
                </div>
            </div>
            <div className="order-items">
                {orderItems.map(orderItem => (
                    <div className="order-item" key={orderItem[0]}>
                        <p>{orderItem[0]}</p>
                        <p>${orderItem[1]}</p>
                    </div>
                ))}
            </div>
            <div className="ship-amounts">
                <div className="section-div">
                    <>
                        <p className="section-heading">Shipping Address:</p>
                        <p>{order.full_name}</p>
                        <p>{formattedAddress[0].join(", ")}</p>
                        <p>{formattedAddress[1].join(", ")}</p>
                    </>
                    <div className="shipping-div">
                        <p className="section-heading">Shipping Speed:</p>
                        <p>{order.shipping_type}</p>
                    </div>
                </div>
                <div className="pricing">
                    <div id="amounts-title">
                        <p>Subtotal:</p>
                        <p>Sales Tax:</p>
                        <p>Shipping Price:</p>
                        <p id="order-total-title">Grand Total:</p>
                    </div>
                    <div id="amounts">
                        <p>${order.subtotal.toFixed(2)}</p>
                        <p>${order.sales_tax.toFixed(2)}</p>
                        <p id="order-ship-price">${order.shipping_price.toFixed(2)}</p>
                        <p id="order-total">${order.total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;
