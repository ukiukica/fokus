import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm'

import "../../../context/Buttons.css"


function LoginModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button id="post-cam-btn" onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default LoginModal;
