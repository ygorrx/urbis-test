import React, { ReactNode } from 'react'
import styles from '../../styles/Modal.module.css'
import { useUrbisContext } from '../context/context'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const { setOpenModal } = useUrbisContext()

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.title_close_btn}>
          <button
            onClick={() => {
              setOpenModal(false)
            }}
          >
            X
          </button>
        </div>
        {children}
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false)
            }}
            className={styles.btn_cancel}
          >
            Responder depois
          </button>
          <button className={styles.btn_save}>Salvar Resposta</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
