import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import SingleOrder from "../SingleOrder/SingleOrder";

import './Orders.css'

function Orders() {

    const sessionUser = useSelector((state) => state.session?.user);

    return (
        <div className="order-page">
        <h2>YOUR ORDERS</h2>
            {sessionUser?.orders.map(order => (
              <SingleOrder order={order} key={order.id}/>
            ))}
        </div>
    )

}

export default Orders;
