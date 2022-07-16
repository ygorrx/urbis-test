import React, { useEffect } from 'react'
import styles from '../styles/BenefitCards.module.css'
import axios from 'axios'
import { useUrbisContext } from '../src/context/context'

const LoggedPage = () => {
  const { benefitList, setBenefitList, setNotification, setBenefitName } =
    useUrbisContext()

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

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    benefitName: string
  ) => {
    e.preventDefault()
    setNotification(true)
    setBenefitName(benefitName)
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
                    <button
                      className={styles.btn_coupon}
                      onClick={(e) => handleSubmit(e, card.title)}
                    >
                      Garantir desconto
                    </button>
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
