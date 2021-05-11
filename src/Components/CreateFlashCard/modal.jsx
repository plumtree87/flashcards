import React from 'react';
import '../CreateFlashCard/modal.css';

export const Modal = () => {
        return ( 
            <div className="modal-wrapper">
                <div className="modal-header">
                    <p>Edit</p>
                </div>
                <span className="close-modal-btn">xcollection</span>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p> input box here </p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel"></button>
                    </div>
                        
                </div>
            </div>
            
        )
    };

 
