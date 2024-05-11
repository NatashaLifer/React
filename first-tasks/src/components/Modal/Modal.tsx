// дописати функціонал компоненту `Modal`

// - має приймати пропсу handleClose яка буде відповідати за закриття модалки
// - по кліку на зовнішній враппер модалки викликати функцію handleClose
// - в батьківському компоненті зберігати всі маніпуляції зі стейтом `isOpen` в `localStorage`


import { FC } from "react"
import { ModalWindowProps } from "./types"
import './Modal.scss'

const Modal:FC<ModalWindowProps> = ({children, isOpen}) => {
    const handleClose = () => isOpen(false)

    return (
        <div className='modal-wrapper' onClick={handleClose}>
            <div className='modal'>
                <button className="modal__close-btn"
                onClick={handleClose}
                > X </button>
                <div className="modal__content"> {children} </div>
            </div>
        </div>
    )
}

export default Modal