import { useRef } from 'react';

import '../styles/dialogs.css';
import '../styles/buttons.css';

function Modal({ children, type }) {

    const modalRef = useRef();

    function openModal() {
        modalRef.current.showModal();
    }

    return (
        <>
            {renderButton(type, openModal)}
            <dialog ref={modalRef}>
                {children}
            </dialog>
        </>
    );
    
}

function renderButton(type, onClick) {
    switch (type) {
        case 'create':
            return (
                <button className="btn primary"
                    onClick={onClick}
                >
                    new
                </button>
            );
        case 'edit':
            return (
                <button onClick={onClick}>
                    <i className="bx bx-edit"></i>
                </button>
            );
        default:
            return (
                <button className="btn secondary"
                    onClick={onClick}
                >
                    {type}
                </button>
            );
    }
}

export default Modal;