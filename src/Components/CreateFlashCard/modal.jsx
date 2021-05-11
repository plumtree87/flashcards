import React from 'react';
import '../CreateFlashCard/modal.css';

export const Modal = ({ show, closeModalHandler }) => {
        return ( 
            <div className="modal-wrapper" 
            style = {{
                opacity: show ? '1' : '0'
            }}
            >
            
                <div className="modal-header">
                    <p>Edit</p>
                </div>
                <span onClick={closeModalHandler} className="close-modal-btn">xcollection</span>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p> input box here </p>
                    </div>
                    <div className="modal-footer">
                        <button onclick={closeModalHandler} className="btn-cancel"></button>
                    </div>
                        
                </div>
            </div>
            
        )
    };

 
