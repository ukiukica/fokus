import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCameraForm from "../EditCamera/EditCameraForm"


function AddCameraModal({currentCamera}) {
    const [showModal, setShowModal] = useState(false);
    console.log("SHOW MODAL: ", showModal)
    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Camera</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCameraForm currentCamera={currentCamera} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default AddCameraModal;
