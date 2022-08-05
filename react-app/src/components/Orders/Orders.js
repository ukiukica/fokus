import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import './Orders.css'

function Orders() {

    const params = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session?.user);

    return (
        <>
        <h1>HELLO FROM ORDERS</h1>
            {sessionUser?.orders.map(order => (
                <>
              <p>{order.created_at}</p>
              <p>{order.order_number}</p>
              <p>{order.order_items}</p>
              <p>{order.full_name}</p>
              <p>{order.address}</p>
              <p>{order.shipping_type}</p>
              <p>{order.sales_tax}</p>
              <p>{order.shipping_price}</p>
              <p>{order.total}</p>
              <p>____________________________________________</p>
              </>
            ))}
        </>
    )

}

export default Orders;
