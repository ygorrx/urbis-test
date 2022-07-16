import React from 'react'

import { useUrbisContext } from '../context/context'

import styles from '../../styles/Modal.module.css'

export function ModalSecond() {
  const { setModalStep, setShowModal } = useUrbisContext()

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.title_close_btn}>
          <button
            onClick={() => {
              setShowModal(false)
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className={styles.body}>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setShowModal(false)
            }}
            className={styles.btn_cancel}
          >
            Responder depois
          </button>
          <button
            className={styles.btn_save}
            onClick={() => setModalStep('stepThird')}
          >
            Salvar Resposta
          </button>
        </div>
      </div>
    </div>
  )
}
