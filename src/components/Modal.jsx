import { useRef } from 'react';

import '../styles/dialogs.css';
import '../styles/buttons.css';

function Modal({ btnLabel, btnClassName, children }) {

    const modalRef = useRef();

    function openModal() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button onClick={openModal} className={btnClassName}>{btnLabel}</button>
            <dialog ref={modalRef}>
                {children}
            </dialog>
        </>
    );
    
}

export default Modal;