import React from "react";
import { useSelector } from "react-redux";

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
