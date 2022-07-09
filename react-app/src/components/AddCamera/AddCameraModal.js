import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCameraForm from './AddCameraForm'
import UploadPicture from './UploadPicture';


function AddCameraModal() {
    const [showModal, setShowModal] = useState(false);
    console.log("SHOW MODAL: ", showModal)
    return (
        <>
            <button onClick={() => setShowModal(true)}>Post a Camera</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddCameraForm closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default AddCameraModal;
