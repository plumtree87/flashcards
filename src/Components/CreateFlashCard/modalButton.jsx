import React, { useState } from 'react';
import { Modal } from './modal'

function ModalButton() {
    const [show, setShow] = useState(true)

    const closeModalHandler = () => setShow(false);

    return (
        <div>
            <button className="btn-openModal" onClick={() => setShow(true)}> Edit </button>
            <Modal show={show} closeModalHandler={closeModalHandler}/>
        </div>
    )
}

export default ModalButton;