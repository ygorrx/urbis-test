import React, { ChangeEvent, MouseEvent, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const LoginPage = () => {
  const [apiData, setApiData] = useState([])
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
      })
  }

  return (
    <section className={styles.container}>
      <div className={styles.image_wrapper}>
        <Image
          src="/assets/logn-image.jpg"
          width="360"
          height="250"
          layout="responsive"
        />
      </div>
      <div className={styles.login_section}>
        <h1>Login Account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="whitelabelId">
            Id
            <input
              type="text"
              name="whitelabelId"
              value={data.whitelabelId}
              onChange={handleChange}
            />
          </label>
          <Link href={'/LoggedPage'} passHref>
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
