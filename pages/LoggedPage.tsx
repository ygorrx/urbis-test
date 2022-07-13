import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IBenefits } from './types/types'

const LoggedPage = () => {
  const [benefitList, setBenefitList] = useState<IBenefits[]>([])
  console.log('benefit inicial', benefitList)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    authAxios
      .post(
        'https://new-api.urbis.cc/incentive/search?page=1&qtd=10&paginable=true'
      )
      .then(({ data }) => {
        console.log(data)
        setBenefitList(data.data.data)
        console.log(benefitList)
      })
  }, [])

  return (
    <div>
      {benefitList.length
        ? benefitList.map((card, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '180px'
                }}
              >
                <div>
                  <div>
                    <h1>{card.title}</h1>
                    <h2>Description: {card.description}</h2>
                    <h2>Discount: {card.discount}</h2>
                    <h2>Rules: {card.rules}</h2>
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
