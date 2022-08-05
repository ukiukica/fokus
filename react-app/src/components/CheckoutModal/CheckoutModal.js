import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Checkout from './Checkout'

import "../../context/Buttons.css"


function CheckoutModal({subtotal}) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="post checkout" onClick={() => setShowModal(true)}>Checkout</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Checkout subtotal={subtotal} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default CheckoutModal;
