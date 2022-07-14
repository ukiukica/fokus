import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm.js';

import "../../../context/Buttons.css"


function SignUpModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button id="post-cam-btn" onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default SignUpModal;
