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
    console.log(orderItems)

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
            <div className="section-div">
                {orderItems.map(orderItem => (
                    <div className="order-item" key={orderItem[0]}>
                        <p>{orderItem[0]}</p>
                        <p>${orderItem[1]}</p>
                    </div>
                ))}
            </div>
            <div className="section-div">
                <>
                    <p className="shipping-heading">Shipping Address:</p>
                    <p>{order.full_name}</p>
                    <p>{formattedAddress[0].join(", ")}</p>
                    <p>{formattedAddress[1].join(", ")}</p>
                </>
                <div className="shipping-div">
                    <p className="shipping-heading">Shipping Speed:</p>
                    <p>{order.shipping_type}</p>
                </div>
            </div>
            <div className="amounts">
                <div>
                    <p>Subtotal:</p>
                    <p>Sales Tax:</p>
                    <p>Shipping Price:</p>
                    <p>Total:</p>
                </div>
                <div>
                    <p>${order.subtotal.toFixed(2)}</p>
                    <p>${order.sales_tax.toFixed(2)}</p>
                    <p>${order.shipping_price.toFixed(2)}</p>
                    <p>${order.total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;
