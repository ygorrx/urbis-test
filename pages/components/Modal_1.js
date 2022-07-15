import React from 'react'
import styles from '../../styles/Modal.module.css'

function Modal({ setOpenModal }) {
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
        <div className={styles.title}>
          <h1>Oba! Fulano, você usou um benefício!</h1>
        </div>
        <div className={styles.body}>
          <p>
            Identificamos que você acessou o site do parceiro tal no dia
            00/00/0000. Você pode nos dizer se utilizou um benefício na ocasião?
          </p>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.btn_confirm}>
            Sim. Eu utilizei um benefício.
          </button>
          <button className={styles.btn_negate}>
            Não. Eu não utilizei um benefício.
          </button>
        </div>
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
