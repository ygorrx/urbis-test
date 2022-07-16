import React from 'react'

import styles from '../../styles/Modal.module.css'

import { useUrbisContext } from '../context/context'

export function ModalFail() {
  const { setModalStep, setShowModal, resetModalSteps } = useUrbisContext()

  const handleModalClose = () => {
    setModalStep('stepFirst')
    setShowModal(false)
    resetModalSteps()
  }

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.title_close_btn}>
          <button onClick={handleModalClose}>X</button>
        </div>
        <div className={styles.title}>
          <h1>Fail</h1>
        </div>
        <div className={styles.body}>
          <button onClick={handleModalClose}>Voltar para os benefícios</button>
        </div>
      </div>
    </div>
  )
}
