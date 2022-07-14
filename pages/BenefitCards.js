import React, { useState, useEffect } from 'react'
import styles from '../styles/BenefitCards.module.css'
import Button from './components/Button'
import axios from 'axios'
import Modal from './components/Modal'

const LoggedPage = () => {
  const [benefitList, setBenefitList] = useState([])
  const [coupon, setCoupon] = useState(false)
  const [showModal, setShowModal] = useState(false)
  console.log(showModal)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    authAxios
      .post(
        'https://new-api.urbis.cc/incentive/search?page=2&qtd=10&paginable=true'
      )
      .then(({ data }) => {
        setBenefitList(data.data.data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <div className={styles.container}>
      {showModal && <Modal setOpenModal={setShowModal} />}
      {benefitList.length
        ? benefitList.map((card, key) => {
            return (
              <div key={key} className={styles.card}>
                <div
                  className={styles.card_image}
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                  }}
                ></div>
                <div>
                  <div className={styles.card_text}>
                    <h1>{card.title}</h1>
                    <h2>
                      <span>Descrição:</span> {card.description}
                    </h2>
                    <h2>
                      <span>Desconto:</span> {card.discount}
                    </h2>
                    <h2>
                      <span>Regras:</span> {card.rules}
                    </h2>
                  </div>
                  <div className={styles.button_wrapper}>
                    <Button onClick={handleSubmit}>Garantir desconto!</Button>
                  </div>
                </div>
              </div>
            )
          })
        : 'Formulário nao carregado'}
    </div>
  )
}

export default LoggedPage
