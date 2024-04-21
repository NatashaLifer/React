import { FC, PropsWithChildren } from "react"

const Modal:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='modal-wrapper'>
            <div className='modal-content'>
                <p> {children} </p>
            </div>
        </div>
    )
}

export default Modal