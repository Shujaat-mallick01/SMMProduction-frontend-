import React from 'react';

const Modal = ({ isOpen, onClose, title, children, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay d-flex justify-center col-white align-center col-white fixed">
      <div className="modal-content text-center">
        {/* Close button */}
        <button className="modal-close-button cursor-pointer border-none px-2" onClick={onClose}>
          &times;
        </button>
        
        <h3 className='mb-2 modal-head'>{title}</h3>
        {children}
        
        <button className="confirm-button border-none cursor-pointer button-secondary mt-5" onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
