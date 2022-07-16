import React, { useState } from 'react'
import styles from '../../styles/Modal.module.css'
import { useUrbisContext } from '../context/context'
import Image from 'next/image'

export function ModalFirst() {
  const {
    user,
    modalSteps,
    setModalStep,
    setModalSteps,
    setShowModal,
    benefitName
  } = useUrbisContext()
  const [pressButton, setPressButton] = useState(false)
  const [answer, setAnswer] = useState('')
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  const handleNegate = () => {
    setModalSteps({
      ...modalSteps,
      stepFail: true
    })
    setPressButton(true)
    setAnswer('Nao. Eu nao utilizei um benefício.')
  }

  const handleConfirm = () => {
    setModalSteps({
      ...modalSteps,
      stepFirst: {
        isAlreadyUsed: true
      }
    })
    setPressButton(true)
    setAnswer('Sim. Eu utilizei um benefício.')
  }

  const buttonOnFocus = () => {
    if (pressButton === true) return
    setPressButton(false)
  }

  const saveAnswer = () => {
    setModalStep(modalSteps.stepFail ? 'stepFail' : 'stepSecond')
    localStorage.setItem('Resposta do usuario', answer)
  }

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.image_icon}>
          <Image src={'/assets/gift.svg'} width={45} height={45} />
        </div>
        <div className={styles.title}>
          <h1>
            Oba!
            <br /> {user?.name}, você usou um benefício!
          </h1>
        </div>
        <div className={styles.body}>
          <p>
            Identificamos que você acessou o site do parceiro{' '}
            <strong>{benefitName}</strong> {''}
            dia {''}
            {date}. Você pode nos dizer se utilizou um benefício na ocasião?
          </p>
        </div>
        <div className={styles.btn_container}>
          <button
            className={styles.btn_confirm}
            onClick={handleConfirm}
            onBlur={buttonOnFocus}
          >
            Sim. Eu utilizei um benefício.
          </button>
          <button className={styles.btn_negate} onClick={handleNegate}>
            Não. Eu não utilizei um benefício.
          </button>
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
          {pressButton ? (
            <button className={styles.btn_save} onClick={saveAnswer}>
              Salvar Resposta
            </button>
          ) : (
            <button
              disabled={!pressButton}
              className={styles.btn_save}
              onClick={saveAnswer}
            >
              Salvar Resposta
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
