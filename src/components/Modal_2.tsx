import React, { useState } from 'react'

import { useUrbisContext } from '../context/context'

import styles from '../../styles/ModalSecond.module.css'

import Image from 'next/image'

export function ModalSecond() {
  const { setModalStep, setShowModal } = useUrbisContext()
  const [pressButton, setPressButton] = useState(false)
  const [buttonChosen, setButtonChosen] = useState(true)
  console.log('botao', pressButton)
  console.log('botao escolhido', buttonChosen)

  const buttonToTrue = () => {
    setPressButton(true)
    setButtonChosen(false)
  }

  const buttonOnFocus = () => {
    if (pressButton === true) return
    setPressButton(false)
    setButtonChosen(true)
  }

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <div className={styles.image_icon}>
          <Image src={'/assets/star.svg'} width={45} height={45} />
        </div>
        <div className={styles.title}>
          <h1>
            Que bom que você <br /> aproveitou esse benefício!
          </h1>
        </div>
        <div className={styles.body}>
          <p>
            Esse benefício foi relevante para que você permanecesse como
            cliente?{' '}
          </p>
        </div>
        <div className={styles.btn_container}>
          <button
            className={styles.btn_confirm}
            onClick={buttonToTrue}
            onBlur={buttonOnFocus}
          >
            Irrelevante
          </button>
          <button
            className={styles.btn_confirm}
            onClick={buttonToTrue}
            onBlur={buttonOnFocus}
          >
            Pouco Relevante
          </button>
          <button
            className={styles.btn_confirm}
            onClick={buttonToTrue}
            onBlur={buttonOnFocus}
          >
            Indiferente
          </button>
          <button
            className={styles.btn_confirm}
            onClick={buttonToTrue}
            onBlur={buttonOnFocus}
          >
            Relevante
          </button>
          <button
            className={styles.btn_confirm}
            onClick={buttonToTrue}
            onBlur={buttonOnFocus}
          >
            Muito Relevante
          </button>
        </div>
        <form className={styles.form_modal}>
          <label>
            <h2>Gostaria de deixar algum comentário? (opcional)</h2>
          </label>
          <textarea
            name="message"
            placeholder="Digite aqui"
            className={styles.input}
            rows={5}
          ></textarea>
        </form>
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
            <button
              className={styles.btn_save}
              onClick={() => setModalStep('stepThird')}
            >
              Salvar Resposta
            </button>
          ) : (
            <button
              disabled={!pressButton}
              className={styles.btn_save}
              onClick={() => setModalStep('stepThird')}
            >
              Salvar Resposta
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
