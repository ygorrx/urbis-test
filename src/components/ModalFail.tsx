import React from 'react'

import styles from '../../styles/ModalFail.module.css'

import { useUrbisContext } from '../context/context'

import Image from 'next/image'

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
        <div className={styles.image_icon}>
          <Image src={'/assets/coupon-fail.svg'} width={60} height={60} />
        </div>
        <div className={styles.title}>
          <h1>
            Que pena! <br />
            Temos muitos cupons.
          </h1>
        </div>
        <div className={styles.body}>
          <p>
            Nós estamos cheios de benefícios para você! Não deixe de usar um dos
            nossos cupons.
          </p>
        </div>
        <button className={styles.btn_save} onClick={handleModalClose}>
          Fechar
        </button>
      </div>
    </div>
  )
}
