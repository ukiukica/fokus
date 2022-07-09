import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCameraForm from './AddCameraForm'
import UploadPicture from './UploadPicture';


function AddCameraModal() {
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);

    const switchModal = () => {
        setShowCameraModal(false)
        setShowImageModal(true)
    }

    const onClose = () => {
        setShowCameraModal(false)
        setShowImageModal(false)
    }


    return (
        <>
            <button onClick={() => setShowCameraModal(true)}>Post a Camera</button>
            {showCameraModal && (
                <Modal onClose={onClose}>
                    <AddCameraForm switchModal={switchModal} />
                </Modal>
            )}
            {showImageModal && (
                <Modal onClose={onClose}>
                    <UploadPicture closeModal={() => setShowImageModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default AddCameraModal;
