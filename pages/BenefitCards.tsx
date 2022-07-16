import React, { useState, useEffect } from 'react'
import styles from '../styles/BenefitCards.module.css'
import Button from '../src/components/Button'
import axios from 'axios'
import { useUrbisContext } from '../src/context/context'

const LoggedPage = () => {
  const { benefitList, setBenefitList, notification, setNotification } =
    useUrbisContext()
  console.log('benefit list contexto', benefitList)

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNotification(true)
  }

  return (
    <div className={styles.container}>
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
