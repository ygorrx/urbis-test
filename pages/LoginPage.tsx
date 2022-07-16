import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useUrbisContext } from './context/context'

const LoginPage = () => {
  const router = useRouter()
  const { apiData, setApiData } = useUrbisContext()
  const [data, setData] = useState({
    email: '',
    password: '',
    whitelabelId: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setData({
      ...data,
      [e.currentTarget.name]: value
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = {
      email: data.email,
      password: data.password,
      whitelabelId: data.whitelabelId
    }

    console.log(userData)
    axios
      .post('https://new-api.urbis.cc/auth/user', userData)
      .then((response) => {
        console.log(response.status)
        console.log(response.data)
        setApiData(response.data)
        console.log(apiData)
        localStorage.setItem('token', response.data.access_token)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (apiData && token) {
      router.push('/BenefitCards')
    }
  }, [apiData, router])

  return (
    <section className={styles.containerTest}>
      <div className={styles.image_wrapper}>
        <Image src="/assets/logn-image.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.login_section}>
        <div className={styles.form_wrapper}>
          <h1>Login Account</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="whitelabelId" className={styles.label}>
              Id
            </label>
            <input
              type="text"
              name="whitelabelId"
              value={data.whitelabelId}
              onChange={handleChange}
              className={styles.input}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
