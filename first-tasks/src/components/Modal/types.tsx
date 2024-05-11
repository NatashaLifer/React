import { PropsWithChildren, Dispatch, SetStateAction } from 'react'

export type ModalWindowProps = PropsWithChildren & {
    isOpen: Dispatch<SetStateAction<boolean>>
}