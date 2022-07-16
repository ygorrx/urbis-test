import React from 'react'

import styles from '../../styles/ModalThird.module.css'

import { useUrbisContext } from '../context/context'

import Image from 'next/image'

export function ModalThird() {
  const { setModalStep, setShowModal } = useUrbisContext()

  const handleModalClose = () => {
    setModalStep('stepFirst')
    setShowModal(false)
  }

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.image_icon}>
          <Image src={'/assets/medal.svg'} width={60} height={60} />
        </div>
        <div className={styles.title}>
          <h1>Sucesso!</h1>
        </div>
        <div className={styles.body}>
          <p>
            Sua resposta foi resgistrada com sucesso. Agradecemos muito por você
            ter dedicado esse tempo para nos ajudar a tornar nosso clube cada
            vez melhor.
          </p>
        </div>
        <button className={styles.btn_save} onClick={handleModalClose}>
          Fechar
        </button>
      </div>
    </div>
  )
}
